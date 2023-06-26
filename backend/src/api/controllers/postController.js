import Post from '../models/postModel';
import { v4 as uuidv4 } from 'uuid';

export const getAllPosts = (req, res) => {
    Post.find()
        .then(posts => {
            return res.json({ success: true, posts }).status(200);
        })
        .catch(err => {
            console.log(err);
        });
};

export const searchPost = (req, res) => {
    const { title } = req.query;

    if (!title) {
        return res.json({ success: false, message: "Please fill all the fields" }).status(400);
    }

    Post.find({ title: { $regex: title, $options: "i" } })
        .then(posts => {
            return res.json({ success: true, posts }).status(200);
        })
        .catch(err => {
            console.log(err);
        });
};

export const createPost = (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.json({ success: false, message: "Please fill all the fields" }).status(400);
    }

    const createdPost = new Post({
        id: uuidv4(),
        title,
        body,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    });

    createdPost.save()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });

    return res.json({ success: true, message: "Post created successfully" }).status(201);
};




