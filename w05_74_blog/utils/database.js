import pkg from 'pg';
const {Pool} = pkg;

//const { Pool } = require('pg');

import dotenv from 'dotenv';
dotenv.config();

let pool;
if(process.env.DATABASE === 'SUPABASE'){
    pool = new Pool({
        host:process.env.SUPABASE_HOST,
        port:'5432',
        user:'postgres',
        password:process.env.SUPABASE_PASSWORD,
        database:'postgres',
    });
    console.log('supabase');
}else{

    pool = new Pool({
        host:'localhost',
        port:'5432',
        user:'postgres',
        password:'0000',
        database:'wp1_demo_74'
});
}

console.log('connect database', pool.options);

const testDB = async () => {
    try{
        const results = await pool.query(`select * from card_74`);
        console.log('json data',JSON.stringify( results.rows));
    }catch(error){
        console.log(error);
    }
}

testDB();

console.log('connect database', pool.options);

export default pool;

//module.export = pool;