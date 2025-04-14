const db = require('../models/db');

// GET: all employees
const getAllEmployees = (req, res) => {
  const query = 'SELECT * FROM employees';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error', err });
    res.status(200).json(results);
  });
};

// POST: add new employee
const addEmployee = (req, res) => {
  const { emp_id, name, joining_date, phone, department } = req.body;

  const query = `INSERT INTO employees (emp_id, name, joining_date, phone, department)
                 VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [emp_id, name, joining_date, phone, department], (err, result) => {
    if (err) return res.status(500).json({ message: 'DB error', err });
    res.status(201).json({ message: 'Employee added successfully' });
  });
};

// PUT: update employee
const updateEmployee = (req, res) => {
  const { id } = req.params;
  const { emp_id, name, joining_date, phone, department } = req.body;

  const query = `UPDATE employees
                 SET emp_id=?, name=?, joining_date=?, phone=?, department=?
                 WHERE id=?`;
  db.query(query, [emp_id, name, joining_date, phone, department, id], (err, result) => {
    if (err) return res.status(500).json({ message: 'DB error', err });
    res.status(200).json({ message: 'Employee updated successfully' });
  });
};

// DELETE: remove employee
const deleteEmployee = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM employees WHERE id=?';

  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'DB error', err });
    res.status(200).json({ message: 'Employee deleted successfully' });
  });
};

module.exports = {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
