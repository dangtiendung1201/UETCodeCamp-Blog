import Post from "../models/postModel";

export const Homepage = async (req, res) => {
    const locals = {
        title: "Adu vjp que",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    }
    try {
        let perPage = 5;
        let page = req.query.page || 1;
        let postNumber = perPage * page - perPage;
        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(postNumber)
            .limit(perPage)
            .exec();

        const count = await Post.count();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);
        res.render('index', {
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    }
    catch (error) {
        console.log(error);
    }

};

export const About = (req, res) => {
    res.render('about');
};

export const Contact = (req, res) => {
    res.render('contact');
};

export const Manage = (req, res) => {
    res.render('manage');
};