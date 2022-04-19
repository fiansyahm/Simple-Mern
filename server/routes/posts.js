import express from 'express';
import fun from '../controllers/posts.js';
import { getPosts } from '../controllers/posts';

const router = express.Router();

// localhost:5000/posts

router.get('/', function(req, res) {
    res.send('Its work');
})

export default router;