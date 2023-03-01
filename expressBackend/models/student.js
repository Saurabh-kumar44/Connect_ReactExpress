import mongoose from 'mongoose'

//Defining schema
const StudentSchema = new mongoose.schema({
    stuname:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
})
//Compiling
const StudentModel = mongoose.model("student",StudentSchema)

export default StudentSchema;