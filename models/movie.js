const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Date,
        required: false
    }
});
module.exports = mongoose.model('Movie', movieSchema);
