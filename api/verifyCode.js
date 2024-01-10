const express = require('express');
const router = express.Router();
const Code = require('../models/Code');

router.post('/', async (req, res) => {
  const { code } = req.body;

  try {
    const result = await Code.useCode(code);
    res.json({ message: result });
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
