import Post from "../models/postModel";

export const deleteAdmin = (req, res) => {
    Post.findOneAndDelete({ id: req.params.id })
        .then(post => {
            return res.json({ success: true, post }).status(200);
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
};