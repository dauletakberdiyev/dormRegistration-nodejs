const mongoose = require('mongoose');

const FacultyCodeSchema = new mongoose.Schema(
    {
        
    },
    {timestamps: true}
);

module.exports = mongoose.model("FacultyCode", FacultyCodeSchema);