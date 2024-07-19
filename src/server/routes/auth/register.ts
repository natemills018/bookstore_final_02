import { Router } from "express";
import * as jwt from 'jsonwebtoken';
import db from "../../db";
import config from "../../config";
import bcrypt, { hash } from 'bcrypt';


const router = Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        // const hashed = await bcrypt.hash(password,12)

        const results = await db.users.register({ email, password})
        
        const token = jwt.sign({ id: results.insertId, email}, config.jwt.secret, {expiresIn: config.jwt.expiration})
        res.status(201).json({message: 'You have registered successfully', token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'There was an issue with registering, please try again later!'})
    }
})


export default router;  