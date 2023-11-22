import db from './database.js'

const testDB = async () => {
    try {
        const results = await db.guery(`select * from menu2_74`);
        console.log('json data', JSON.stringify(results.rows));
    } catch (error){
        console.log(error);
    }
}

testDB();

export default testDB;