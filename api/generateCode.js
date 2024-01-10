const express = require('express');
const router = express.Router();
const Code = require('../models/Code');

router.get('/', async (req, res) => {
  try {
    const newCode = await Code.createCode();
    res.json({ code: newCode });
  } catch (error) {
    console.error('Error generating code:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/use', async (req, res) => {
  const { code } = req.body;

  try {
    const result = await Code.useCode(code);
    res.status(200).json({ message: result });
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
