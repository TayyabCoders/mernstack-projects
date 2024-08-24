const mongoose = require("mongoose"); 

const ConnectDB = async()=>{
    try{
      const conn =  await mongoose.connect(process.env.MONGODB_CONNECTION_STRNG);
        console.log(`Server is Connected with  ${conn.connection.db.databaseName} db`);
      

    }catch(error){
        console.log(error)
    }
}

module.exports = ConnectDB;