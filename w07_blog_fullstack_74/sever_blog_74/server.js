import express from 'express';
import logger from 'morgan';
import path from 'path';

import apiCardRouter_74 from'./routes/api/apiCardRouter_74.js';
const app = express();

import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import db from './utils/database.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(cors());

// app.use('/', (req, res, next ) => {
//     res.render('index', {title: 'Express'});
// });

app.use('/api/card_74', apiCardRouter_74);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    if(process.env.DATABASE === 'SUPABASE'){
        console.log(`Connecting SUPABASE PostgreSQL database ${db.options.database}`);
    }else{
        console.log(`Connecting local PostgreSQL ${db.options.database}`);
    }
    console.log(`Connecting on port :${port}`);
});