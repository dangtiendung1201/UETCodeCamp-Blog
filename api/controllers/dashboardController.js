import Post from "../models/postModel";

export const Dashboard = (req, res) => {
    // get all posts then render
    Post.find()
        .then(posts => {
            res.render('admin/dashboard', { posts });
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
};