const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Replace user fields at once
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  try {
    await User.update(updatedUser, { where: { id: userId } });
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed...

module.exports = router;
