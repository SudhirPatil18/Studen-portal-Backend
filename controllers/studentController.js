// controllers/studentController.js
const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addOrUpdateStudent = async (req, res) => {
  const { name, subject, marks } = req.body;

  try {
    let student = await Student.findOne({ name, subject });
    if (student) {
      student.marks += marks;
    } else {
      student = new Student({ name, subject, marks });
    }
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
