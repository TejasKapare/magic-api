const express = require('express');
const router = express.Router();
const { Company } = require('../models');

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed...

module.exports = router;
