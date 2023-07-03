import Post from "../models/postModel";

export const editInterface = (req, res) => {
    Post.findOne({ id: req.params.id })
        .then(post => {
            res.render('admin/edit', { post });
            // return res.json({ success: true, post }).status(200);
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
};

export const editAdmin = (req, res) => {
    Post.findOneAndUpdate({ id: req.params.id }, { ...req.body, updatedAt: Date.now() }, { new: true })
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
