// import {Post} from "../models/postModel";
// //import {adminLayout} from '../views/layouts/admin';

// //ADMIN EDIT POSTS
// //get to where admin will edit posts
// export const getToAdminEdit = async (req, res) => {
//     try {
  
//       const locals = {
//         title: "Edit Post",
//         description: "Free NodeJs User Management System",
//       };
  
//       const data = await Post.findOne({ _id: req.params.id });
  
//         /*res.render('admin/edit-post', {
//         locals,
//         data,
//         layout: adminLayout
//       })*/
  
//     } catch (error) {
//       console.log(error);
//     }
  
// };
// // edit posts
// export const putAdmin = async (req, res) => {
//     try {
  
//       await Post.findByIdAndUpdate(req.params.id, {
//         title: req.body.title,
//         body: req.body.body,
//         updatedAt: Date.now()
//       });
  
//       res.redirect(`/edit-post/${req.params.id}`);
  
//     } catch (error) {
//       console.log(error);
//     } 
// };