const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');

dotenv.config();

const router = require('./function');


app.use('/notes',router)


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('connected mongoDB'))
.catch((err)=>{
    console.log('error occured:',err)
})









app.listen(process.env.PORT,()=>{
    console.log('server connected.. http://localhost:4000');
})

