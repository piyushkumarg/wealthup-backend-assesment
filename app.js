const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const generateCodeRoute = require('./api/generateCode');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
const URI = process.env.MONGO_URL;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/codes', generateCodeRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
