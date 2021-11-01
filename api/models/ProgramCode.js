const mongoose = require('mongoose');

const ProgramCodeSchema = new mongoose.Schema(
    {
        
    },
    {timestamps: true}
);

module.exports = mongoose.model("ProgramCode", ProgramCodeSchema);