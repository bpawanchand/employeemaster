const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ Message: `Employee Communication details will be read...` });
});

module.exports = router;
