//const db = require('./database');
import db from

const testDB = async () => {
    try{
        const results = await pool.db.query(`select * from card_74`);
        console.log('json data', result);
    }catch(error){
        console.log(error);
    }
};

testDB();

module.export = testDB;