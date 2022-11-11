const express = require('express');
const router = express.Router()
const newsData =  require('../models/newsdata')

// get
router.get('/', async (req,res)=>{
   try {
    const data = await newsData.find()
    res.send(data)
   } catch (err){
    res.status(500).json({ message: err.message})
   }
})

// post
router.post('/', async (req,res)=>{
    const addData = new newsData({
        title: req.body.title,
        imageURL: req.body.imageURL,
        description: req.body.description,
    })
    console.log(addData)
    try{
        let addeddata = await addData.save()
        res.status(201).json(addeddata)
    }catch(err){
        res.status(400).json({ message: err.message})
    }
})







module.exports = router