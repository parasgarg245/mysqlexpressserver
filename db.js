const mysql =require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
})
// connection.query(
//     `select * from persons`,
//     function (err, rows, cols) {
//         if (err) {
//             console.log(err);
//         }
//         else
//             console.log(rows);
//     }
// )

function getAllpersons(){

    return new Promise(function(resolve,reject){
        connection.query(
            `select * from persons`,
            function (err, rows, cols) {
                if (err) {
                    reject(err);
                }
                else
                    resolve(rows);
            }
        )
    })
}


function addPersons(name1,age1,city1){
    return new Promise(function(resolve,reject){
        connection.query(
            `insert into persons(name,age,city) values(?,?,?) `,
            [name1,age1,city1],
                
                function(err,rows){
                    if(err){
                        reject(err);
                    }
                    else
                        resolve();
                }
        )
    })
}


exports=module.exports={
    getAllpersons,
    addPersons
}
