import mongoose from 'mongoose'

//Defining schema
const studentSchema = new mongoose.schema({
    stuname:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
})
//Compiling model
const studentModel = mongoose.model("student",studentSchema)

export default studentSchema;