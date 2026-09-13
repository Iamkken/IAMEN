const Student = require("../models/student.models");

const createStudent = async (req, res) => {
    const { name, age, email, phone, course, institution } = req.body;
    try {
        const student = new Student({
            name,
            age,
            email,
            phone,
            course,
            institution
        });
        await student.save();
        return res.status(201).json({ message: 'Student created successfully', student });
    } catch (error) {
        return res.status(500).json({ message: 'internal server error' });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json({ message: 'Students retrieved successfully', students });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, age, email, phone, course, institution } = req.body;
    try {
        const student = await Student.findByIdAndUpdate(id, { name, age, email, phone, course, institution }, { new: true });
        return res.status(200).json({ message: 'Student updated successfully', student });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        return res.status(200).json({ message: 'Student retrieved successfully', student });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getStudentByName = async (req, res) => {
    const { name } = req.query;
    try {
        const student = await Student.find({ name });
        return res.status(200).json({ message: 'Student retrieved successfully', student });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        await Student.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getStudentByEmail = async (req, res) => {
    const { email } = req.query;
    try {
        const student = await Student.findOne({ email });
        return res.status(200).json({ message: 'Student retrieved successfully', student });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getStudentByAge = async (req, res) => {
    const { age } = req.query;
    try {
        const student = await Student.find({ age });
        return res.status(200).json({ message: 'Student retrieved successfully', student });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getStudentByCourse = async (req, res) => {
    const { course } = req.query;
    try {
        const student = await Student.find({ course });
        return res.status(200).json({ message: 'Student retrieved successfully', student });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    getStudent,
    getStudentByName,
    getStudentByEmail,
    getStudentByAge,
    getStudentByCourse,
    deleteStudent
};