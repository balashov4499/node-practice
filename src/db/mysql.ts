import * as mysql from 'mysql';

const db = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'Ilya_4499',
    database: 'nodepract'
});

db.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log('mysql connected')
});

export {db};
