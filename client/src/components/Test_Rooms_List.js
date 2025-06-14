import React from 'react';
import { Rooms_Delete } from '../api/API_Test';

export default function Room_List({Rooms, onRoomDeleted}) {
    const handleDelete = async (id) => {
        await Rooms_Delete(id);
        onRoomDeleted();
    }

    return (
        <ul>
            {Rooms.map((room) => (
                <li key={room._id}>
                    <strong>{room.Name}</strong> - {room.Capacity} ({room.Type})
                    <button onClick={() => handleDelete(room._id)}> Delete </button>
                </li>
            ))}
        </ul>
    )
}