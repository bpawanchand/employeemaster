const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log(`[MONGODB]: Connected Successfully`);
  } catch (error) {
    console.log(`[MONGODB]: Error while connecting to the DB`);
    process.exit(1);
  }
};

module.exports = connectDB;
