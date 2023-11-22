import express from 'express';
var router = express.Router();

import db from '../../utils/database.js';

/* GET home page. */
router.get('/menu_74', async (req, res, next) => {
    try{
        const results = await db.query(`select * from menu2_74`);
        console.log('json data', results.rows);
        res.json(results.rows);
    } catch (error){
        console.log(error);
    }
});

router.get('/menu_74/:category', async (req, res, next) => {
   console.log('category', req.params.category);
   try{
    const results = await db.query(
        `select * from menu2_74 where category = $1`,
        [req.params.category]
    );
    console.log('json data', results.rows);
    res.json(results.rows);
   }catch(error){
    console.log(error);
   }
});

export default router;
