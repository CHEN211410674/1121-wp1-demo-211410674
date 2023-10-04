const { Pool } = require('pg');

let pool;

pool = new Pool({
    user:'postgres',
    host:'localhost',
    port:'5432',
    password:'0000',
    database:'wp1_demo_74'
});

//console.log('connect database', pool.options);

const testDB = async () => {
    try{
        const results = await pool.query(`select * from card_74`);
        console.log('json data', results.rows);
    }catch(error){
        console.log(error);
    }
}

testDB();

module.export = pool;