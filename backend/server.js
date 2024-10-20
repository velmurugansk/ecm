const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; 
const dotenv = require("dotenv");
const authRouter = require('./routes/auth/authRouter')


dotenv.config();

mongoose.connect(process.env.MONGOURL).then(
    () => console.log('Mongodb connected')
).catch((error) => console.log(error))

app.use(cors({
    origin : 'http://localhost:5173',
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders : [
        "Content-type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials:true
}))

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);

app.get('/hello', (req, res) => {
 res.send('Hello, World!');
});
// Start the server
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});