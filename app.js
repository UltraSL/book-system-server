require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.cors = require('cors');
app.use(app.cors());


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected successfully!");
    } catch (err) {
      console.error("MongoDB connection error:", err);
      process.exit(1); // Exit the app if the connection fails
    }
  };

 
connectDB();

app.use(express.json());
 

const bookRoutes = require('./routes/bookRoute');
app.use('/api/books', bookRoutes);