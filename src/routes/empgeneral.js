const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ Message: 'Employee General Information....' });
});

router.get('/:id', (req, res) => {
  res.json({ Message: `Employee ${req.params.id} information is here` });
});

module.exports = router;
