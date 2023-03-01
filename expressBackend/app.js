import express from 'express'
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

import connectDB from './db/connectdb.js';
connectDB(DATABASE_URL);

//JSON
app.use(express.json());

import web from './routes/web.js'
app.get('/api',web);


app.listen(port, (req,res)=>{
    console.log("Listening at port",port);
})