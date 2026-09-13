const express = require('express');
const router = express.Router();
const { createStudent, getStudents, updateStudent, getStudent, getStudentByName, 
    deleteStudent, getStudentByEmail, getStudentByAge, getStudentByCourse } = require('../controllers/student.controllers');

router.post('/create-student', createStudent);
router.get('/get-students', getStudents);
router.put('/update-student/:id', updateStudent);
router.get('/get-student/:id', getStudent);
router.get('/get-student-by-name', getStudentByName);
router.get('/get-student-by-email', getStudentByEmail);
router.get('/get-student-by-age', getStudentByAge);
router.get('/get-student-by-course', getStudentByCourse);
router.delete('/delete-student/:id', deleteStudent);

module.exports = router;
