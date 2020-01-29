const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ Message: 'Read Address Data...' });
});

module.exports = router;
