import express from 'express';
const app = express();
var router = express.Router();

// Loading middleware(urlencoded) which is used to parse incomming requests
router.use(express.urlencoded({ extended: false} ));

import {studentController} from '../controllers/studentController';

router.get('/student',studentController.getAllDoc);



export default router;