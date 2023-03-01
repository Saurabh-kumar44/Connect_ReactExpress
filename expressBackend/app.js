import express from 'express'
// const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

import connectDB from './db/connectdb.js';
connectDB(DATABASE_URL);

app.listen(port, (req,res)=>{
    console.log("Listening at port",port);
})