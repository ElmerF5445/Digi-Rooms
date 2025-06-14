const mongoose = require('mongoose');

const Rooms_Schema = new mongoose.Schema({
    Name: {type: String, required: true},
    Capacity: {type: Number, required: true},
    Type: {type: String, required: true},
    Location: {
        Building: {type: String, required: true},
        Floor: {type: String, required: true},
        Code: {type: String, required: true},
        Coordinates: {
            X: {type: String, required: true},
            Y: {type: String, required: true}
        }
    }
    
});

module.exports = mongoose.model('Rooms', Rooms_Schema);