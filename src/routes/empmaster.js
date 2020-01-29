const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ Message: 'Read entire master data of Employee' });
});

module.exports = router;
