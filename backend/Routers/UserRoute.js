import express from  'express'
import {Register} from "../Controllers/UserRegister.js"
const router   = express.Router();

router.route("/register").post(Register);


export default router