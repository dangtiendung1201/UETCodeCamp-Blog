import Post from "../models/postModel";

export const deleteInterface = (req, res) => {
    res.redirect('/dashboard');
};

export const deleteAdmin = (req, res) => {
    Post.findOneAndDelete({ id: req.params.id })
        .then(post => {
            res.redirect('/dashboard');
            // return res.json({ success: true, post }).status(200);
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
};