import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

//Importing and loading cors
import cors from 'cors'
app.use(cors());

//Database connection
import connectdb from './db/connectdb';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';
connectdb(DATABASE_URL);

//JSON
app.use(express.json())

import web from './routes/web.js';
app.use('/api', web);

app.listen(port, ()=>{
    console.log("Listening to port",port);
})

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
// });
