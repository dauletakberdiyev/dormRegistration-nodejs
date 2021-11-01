const mongoose = require('mongoose');

const BookingStudentSchema = new mongoose.Schema(
    {
        first_name: {type: String, default: null},
        last_name: {type: String, default: null},
        father: {type: String, default: null},
        email: {type: String, default: null},
        status: {type: String, default: null},  
        birth_date: {type: Date, default: null}, 
        iin: {type: Number, default: null},
        city: {type: String, default: null},
        address: {type: String, default: null},
        course: {type: Number, default: null},
        faculty_id: {type: [mongoose.Schema.Types.ObjectId], ref: 'facultyCode', default: null},
        program_id: {type: [mongoose.Schema.Types.ObjectId], ref: 'programCode', default: null},
        school: {type: String, default: null},
        self_number: {type: String, default: null},
        passport_path: {type: String, default: null},
        photo_path: {type: String, default: null},
        assistant_id: {type: [mongoose.Schema.Types.ObjectId], ref: 'user', default: null},
        gender: {type: String, required: true},
        agreement: {type: Boolean, required: true},
        room_id: {type: String, default: null}
    },
    {timestamps: true}
)

module.exports = mongoose.model("BookingStudent", BookingStudentSchema);