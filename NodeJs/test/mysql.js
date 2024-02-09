/**
 * 
 * Connection using the mysql package
 * 
 */

// const mysql = require('mysql');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'harsh',
//   password: 'root@123',
//   database: 'pricing'
// });


// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });


// connection.query("CREATE TABLE pricings (name VARCHAR(255), address VARCHAR(255))", (data) => {
//   console.log(data)
// })

// // setTimeout(()=>{
// //   connection.end();
// // }, 1000)



/**
 * Mysql using the sequelize
 */


const Sequelize = require('sequelize');

const main = async () => {
  const connection = new Sequelize('pricing', 'harsh', 'root@123', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();
