const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');

// Gets all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch(err){
        res.json({message: error})
    }
});

// Gets specific post
router.get('/:postId', async (req, res) => {
    try{
     const post = await Post.findById(req.params.postId);
     res.json(post)
    } catch(err) {
        res.json({message: err})
    }
})

// Submits a post
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