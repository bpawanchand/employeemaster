const express = require('express');
const app = express();
const cfenv = require('cfenv');
const connectDB = require('./db/db');
const getAppEnv = cfenv.getAppEnv();
const emp = require('./routes/empmaster');
const port = process.env.PORT || 3000;

// Open & Connect to Database
// connectDB();

// Parse the request body to JSON
app.use(express.json({ extended: false }));

// Define Route Services
app.use('/', emp);
app.use('/empgeneral', require('./routes/empgeneral'));
app.use('/empaddress', require('./routes/empaddress'));
app.use('/empcomm', require('./routes/empcomm'));

// Applicaiton listening to port
app.listen(port, () => {
  console.log(`[APP]: Application is running on port ${port}`);
});
