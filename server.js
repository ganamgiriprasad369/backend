const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const router = require('./function');


app.use('/notes',router)


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ganamgiriprasad369:ganamgiriprasad@cluster0.bmdvj6x.mongodb.net/noted?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('connected mongoDB'))
.catch((err)=>{
    console.log('error occured:',err)
})









app.listen(4000,()=>{
    console.log('server connected.. http://localhost:4000');
})

