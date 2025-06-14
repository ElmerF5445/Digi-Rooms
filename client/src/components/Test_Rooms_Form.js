import React, { useState } from 'react';
import { Rooms_Create } from '../api/API_Test';

export default function Forms_Room({ onRoomCreate }) {
  const [Room, Room_Set] = useState({
    Name: '',
    Capacity: 0,
    Type: '',
    Location: {
      Building: '',
      Floor: '',
      Code: '',
      Coordinates: {
        X: '',
        Y: ''
      }
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested Location fields
    if (name.startsWith('Location.')) {
      const [_, field] = name.split('.');
      Room_Set((prev) => ({
        ...prev,
        Location: {
          ...prev.Location,
          [field]: value
        }
      }));
    }
    // Handle nested Coordinates fields
    else if (name.startsWith('Coordinates.')) {
      const [_, coord] = name.split('.');
      Room_Set((prev) => ({
        ...prev,
        Location: {
          ...prev.Location,
          Coordinates: {
            ...prev.Location.Coordinates,
            [coord]: value
          }
        }
      }));
    }
    // Handle top-level fields
    else {
      Room_Set({ ...Room, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const roomToSend = {
        ...Room,
        Capacity: parseInt(Room.Capacity, 10)
      };
      await Rooms_Create(roomToSend);
      Room_Set({
        Name: '',
        Capacity: 0,
        Type: '',
        Location: {
          Building: '',
          Floor: '',
          Code: '',
          Coordinates: {
            X: '',
            Y: ''
          }
        }
      });
      onRoomCreate();
    } catch (err) {
      console.error('❌ Failed to create room:', err);
      alert('Room creation failed. See console for error.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="Name" placeholder="Name" value={Room.Name} onChange={handleChange} required />
      <input name="Capacity" type="number" placeholder="Capacity" value={Room.Capacity} onChange={handleChange} required />
      <input name="Type" placeholder="Type" value={Room.Type} onChange={handleChange} required />

      <input name="Location.Building" placeholder="Building" value={Room.Location.Building} onChange={handleChange} required />
      <input name="Location.Floor" placeholder="Floor" value={Room.Location.Floor} onChange={handleChange} required />
      <input name="Location.Code" placeholder="Code" value={Room.Location.Code} onChange={handleChange} required />
      <input name="Coordinates.X" placeholder="X coordinate (e.g., 50px)" value={Room.Location.Coordinates.X} onChange={handleChange} required />
      <input name="Coordinates.Y" placeholder="Y coordinate (e.g., 100px)" value={Room.Location.Coordinates.Y} onChange={handleChange} required />

      <button type="submit">Add room</button>
    </form>
  );
}
