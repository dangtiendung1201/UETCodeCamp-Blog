export const Homepage = (req, res) => {
    const locals = {
        title: "Adu vjp que",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    }
    res.render('index', { locals });
};

export const About = (req, res) => {
    res.render('about');
};