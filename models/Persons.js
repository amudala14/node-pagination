const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Persone name is required'],
        unique: [true, 'User with the same name already exists.'],
        minlength: 3,
        trim: true
    }
})

const PersonsData = mongoose.model('PersonsData',personSchema)
module.exports = PersonsData;