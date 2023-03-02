// var studentController = (req,res)=> {
//     res.render('index',{Title:"Home"});
// }

import studentModel  from "../models/student";
class studentController {
    static getAllDoc = async (req,res)=> {
        try{
            const result = await studentModel.find();
            console.log(result);
            res.send(result);
        }catch(err){
            console.log(err);
        } 
    }
}

export {studentController};
