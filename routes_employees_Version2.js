import express from 'express';
import auth from '../middleware/auth.js';

const router = express.Router();

// Example protected route: Get all employees (mock data for demo)
router.get('/', auth, (req, res) => {
  // Only admin can see all employees
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  // Replace with real DB data in production
  const employees = [
    { name: 'John Smith', department: 'Marketing', email: 'john@example.com' },
    { name: 'Lisa Wong', department: 'HR', email: 'lisa@example.com' }
  ];
  res.json({ employees });
});

export default router;