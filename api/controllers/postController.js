import Post from '../models/postModel';
import { v4 as uuidv4 } from 'uuid';

// GET method
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
    const locals = {
        title: "Search",
        description: "Blog"
    }
    const { title } = req.query;

    if (!title) {
        return res.json({ success: false, message: "Please fill all the fields" }).status(400);
    }

    const data = Post.find({ title: { $regex: title, $options: "i" } })
        .then(posts => {
            return res.json({ success: true, posts }).status(200);
        })
        .catch(err => {
            console.log(err);
        });

    res.render("search", {
        data,
        locals,
        currentRoute: '/'
    });
};

export const getPostById = (req, res) => {
    const locals = {
        title: "Search",
        description: "Blog"
    }

    const { id } = req.params;
    let slug = req.params.id;

    if (!id) {
        return res.json({ success: false, message: "Please fill all the fields" }).status(400);
    }

    const data = Post.findOne({ id })
        .then(post => {
            return res.json({ success: true, post }).status(200);
        })
        .catch(err => {
            console.log(err);
        });

    res.render("post", {
        data,
        locals,
        currentRoute: '/posts/${slug}'
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




