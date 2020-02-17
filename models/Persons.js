const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Persone name is required']
    }
})

const PersonsData = mongoose.model('PersonsData',personSchema)
module.exports = PersonsData;