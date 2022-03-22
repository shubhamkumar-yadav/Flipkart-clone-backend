import express from 'express';
import dotenv from 'dotenv';
import { Connection } from './database/db.js';
import { DefaultData } from './default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from './routes/routes.js';
const app = express();
const PORT = 8000;
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);
DefaultData();
app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
});
