const BookingStudent = require('../models/BookingStudents');

exports.register = async function (req, res){
    const newStudent = new BookingStudent({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        father: req.body.father,
        email: req.body.email,
        status: 'w',
        birth_date: new Date(req.body.birth_date),
        iin: req.body.iin,
        city: req.body.city,
        address: req.body.address,
        course: req.body.course,
        school: req.body.school,
        // faculty_id: req.body.faculty_id,
        // program_id: req.body.program_id,
        self_number: req.body.self_number,
        passport_path: req.body.passport_path,
        photo_path: req.body.photo_path,
        gender: req.body.gender,
        agreement: req.body.agreement
    });

    try{
        const student = await newStudent.save();
        res.status(201).json(student);
    }catch(err){
        res.status(500).json(err);
    }
};
