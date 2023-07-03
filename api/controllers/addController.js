import Post from "../models/postModel";
import { v4 as uuidv4 } from 'uuid';

export const addInterface = (req, res) => {
    res.render('admin/add');
};

export const addAdmin = (req, res) => {
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

    // save to database using .then, .catch
    createdPost.save()
        .then(() => {
            res.redirect('/dashboard');
            // return res.json({ success: true, message: "Post created successfully", post: createdPost }).status(201);
        })
        .catch(err => {
            console.log(err);
        });
}