
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title:{type:String, required:true, minlength:3},
    content:{type:String},
    createAtTime:{type:Date, default:Date.now}
})


const ModelData = mongoose.model('modeldata', schema);

module.exports = ModelData;