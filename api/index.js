const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRouter');
const studentRoute = require('./routes/studentRouter');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log('DB connection succesfull'))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(cors())

//Routes
app.use('/api/auth', authRoute);
app.use('/api/student', studentRoute);

app.listen(8800, () => {
    console.log('Backend server is running');
});