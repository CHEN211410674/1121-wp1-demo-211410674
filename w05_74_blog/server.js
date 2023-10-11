import express from 'express';
import logger from 'morgan';


const app = express();

import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', (req, res, next ) => {
    res.render('index', {title: 'Express'});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    if(process.env.DATABASE === 'SUPABASE'){
        console.log(`Connecting SUPABASE PostgreSQL`);
    }else{
        console.log(`Connecting local PostgreSQL`);
    }
    console.log(`Connecting on port :${port}`);
});