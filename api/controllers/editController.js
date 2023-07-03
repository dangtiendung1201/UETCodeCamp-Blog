import Post from "../models/postModel";

export const editAdmin = (req, res) => {
    Post.findOneAndUpdate({ id: req.params.id }, { ...req.body, updatedAt: Date.now() }, { new: true })
        .then(post => {
            return res.json({ success: true, post }).status(200);
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
};