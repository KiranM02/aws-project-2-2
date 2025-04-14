const express = require('express');
const router = express.Router();
const {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');

const authenticateToken = require('../middleware/authMiddleware');

// All routes are protected
router.get('/', authenticateToken, getAllEmployees);
router.post('/', authenticateToken, addEmployee);
router.put('/:id', authenticateToken, updateEmployee);
router.delete('/:id', authenticateToken, deleteEmployee);

module.exports = router;
