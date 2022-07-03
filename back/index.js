const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/router')
dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_URI, () => console.log('Database Connected'));

app.use(express.json());
app.use(cors());
app.use('/app', router);
app.listen(4000, () => console.log('Listening on port 4000'));
