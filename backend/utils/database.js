import mongoose from  'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const databaseConnection = () =>{
    mongoose.connect(process.env.MONGO_URI).then(() =>{
        console.log('Mongodb connected successfully');
    }).catch((error) =>{
        console.log(error);
    })
};

export default databaseConnection;