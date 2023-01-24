const mongoose = require('mongoose');

const Squema = mongoose.Schema;

const mySchema = new Squema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('Message', mySchema);

module.exports = model;