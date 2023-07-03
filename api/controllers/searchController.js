import Post from '../models/postModel';

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

export const getPostById = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.json({ success: false, message: "Please fill all the fields" }).status(400);
    }

    Post.findOne({ id })
        .then(post => {
            res.render('posts', { post });
            return res.json({ success: true, post }).status(200);
        })
        .catch(err => {
            console.log(err);
        });
};
