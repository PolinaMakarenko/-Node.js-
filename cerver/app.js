require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const configApp = require('./config/configApp');
const cors = require('cors');

const app = express();

const corsConfig ={
  origin:['http://localhost:3000', 'http://172.20.10.4:3000'],
  credentials:true,
};

app.use(cors(corsConfig));

configApp(app);

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Сервер работает на ${PORT} порту`);
  try {
    await mongoose.connect(DATABASE_URL)
    console.log('DataBase is working');
} catch (error){
    console.log('Server Error', error.message);
    // process.exit(1)
};
});