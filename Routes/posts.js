const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');

// ROUTES
router.get('/', (req, res) => {
    res.send('We are on posts')
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savedPost = await post.save()
        res.json(savedPost)
    } catch (err){
        res.json({message: error})
    }
})

module.exports = router;