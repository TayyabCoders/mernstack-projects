const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv").config();
const ConnectDB  = require("./config/DB.js");

const app = express();
app.use(express.json());
app.use(cors()); // enable CORS for all route
app.use(express.urlencoded({extended:true}))



// app.use('/api/todoapp',require('./routes/todoRoutes'))
app.use('/api/useraccount',require('./routes/useraccountRoute'))
app.use('/api/workout',require('./routes/workoutRoutes'))
app.use('/api/exercise',require('./routes/exerciseRoutes'))
app.use('/api/nutrition',require('./routes/nutritionRoutes'))
app.use('/api/progress',require('./routes/progressRoutes'))
app.use('/api/useraccount/login',require('./routes/loginRoute'))
app.use('/api/fruitvegetable',require('./routes/fruitVegetableRoutes'))







app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`Server is running on the port of ${process.env.PORT}`);
})