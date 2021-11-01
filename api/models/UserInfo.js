const mongoose = require('mongoose');

//Need to complete this
const UserInfoSchema = new mongoose.Schema(
    {
        user_id: {type: [mongoose.Schema.Types.ObjectId], ref: 'user', required: true},
        father_name: {type: String, default: null},
        gender: {type: String, required: true},
        faculty_id: {type: String, required: true},
        speciality: {type: String, required: true},
        
    },
    {timestamps: true}
);

module.exports = mongoose.model("UserInfo", UserInfoSchema);