// routes/studentRoutes.js
const express = require('express');
const { getStudents, addOrUpdateStudent, deleteStudent } = require('../controllers/studentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getStudents);
router.post('/', protect, addOrUpdateStudent);
router.delete('/:id', protect, deleteStudent);

module.exports = router;
