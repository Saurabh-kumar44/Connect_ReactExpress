import studentModel from '../models/student'

class StudentController{
    static getAllDoc = async(req,res)=>{
        try{
            const result = studentModel.find()
            res.send(result);
        }catch(err){
        console.log(err)
        }
    }
};
export {StudentController};