const express = require('express');
const router = express.Router();
const { Client } = require('../models');

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new client
router.post('/', async (req, res) => {
  const newClient = req.body;

  try {
    // Check if the company is taken by other Client
    const existingClient = await Client.findOne({
      where: { companyId: newClient.companyId }
    });

    if (existingClient) {
      return res.status(400).json({ error: 'Company already taken by another Client' });
    }

    // Create the new Client
    const createdClient = await Client.create(newClient);
    res.json(createdClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
