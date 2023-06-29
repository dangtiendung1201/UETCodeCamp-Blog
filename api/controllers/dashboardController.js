import {Post} from "../models/postModel";
//import {adminLayout} from '../views/layouts/admin';

//ADMIN DASHBOARD
//get to admin's dashboard
export const getToAdminDashboard = async (req, res) => {
    try {
      const locals = {
        title: 'Dashboard',
        description: 'Simple Blog created with NodeJs, Express & MongoDb.'
      }
  
      const data = await Post.find();
      /*res.render('admin/dashboard', {
        locals,
        data,
        layout: adminLayout
      });*/
  
    } catch (error) {
      console.log(error);
    }
  
};