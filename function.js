const express = require('express');

const router = express.Router();

const notes = require('./mode');

router.get('/', async(req,res)=>{
    try{
        const queryId = req.query.id;

        if (queryId) {
            
            const note = await notes.findById(queryId);
            if (!note) {
                return res.status(404).json({ message: 'Note not found.' });
            }
            return res.json(note);
        } else {
            
            const allNotes = await notes.find();
            return res.json(allNotes);
        }
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({message:'error occured'});
    }
    
})

router.get('/:title', async(req,res)=>{
    try
    {
        let title = req.params.title;
        let data = await notes.findOne({ title: title });
        if(!data){
            return res.status(404).json({ message: 'Note not found.' });
        }
        return res.status(201).json(data)

    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({message:'error occured'});
    }
})


router.post('/', async(req, res)=>
{
    try{
        let data = req.body;
        const dataset = await notes.create(data);
        if(!dataset)
        {
            return res.status(404).json({ message: 'note not create properly' });
        }
        res.status(201).json({message:`create note: ${dataset}`})
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'error occured'});
    }
})



module.exports=router;