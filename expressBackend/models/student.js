import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    stuname : { type: String, required: true,trim:true},
    email : {type:String, reqired:true, trim:true},
})

//compiling model
const studentModel = mongoose.model('students',studentSchema);

export default studentModel;