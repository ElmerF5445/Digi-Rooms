// /server/routes/rooms.js
const express = require('express');
const router = express.Router();
const Room = require('../models/Rooms');

// CREATE a room
router.post('/', async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/test', async (req, res) => {
    try {
        const Test = new Room({
            Name: "Test",
            Capacity: 50,
            Type: "Classroom",
            Location: {
                Building: "Main",
                Floor: "1st",
                Code: "201",
                Coordinates: {
                    X: "50px",
                    Y: "150px"
                }
            }
        })

        await Test.save();

        const Rooms_All = await Room.find();
        console.log(Rooms_All);
        res.json({
            message: "Test room added",
            rooms: Rooms_All
        })
        
    } catch (Error) {
        res.status(500).json({error: Error.message});
    }
})

// READ a single room by ID
router.get('/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a room
router.put('/:id', async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a room
router.delete('/:id', async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: 'Room deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
