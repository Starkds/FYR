import express from  'express'
import dotenv  from 'dotenv'
import databaseConnection from './utils/database.js'
import cookieParser from 'cookie-parser'
import UserRoute from './Routers/UserRoute.js'
databaseConnection()


dotenv.config()

const app =  express()

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser);

//api
app.use("/api/v1/user" , UserRoute)
app.get("/",(req,res)=>{
  res.send("Hello 👋")
})

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port  ${process.env.PORT}`);
  });


