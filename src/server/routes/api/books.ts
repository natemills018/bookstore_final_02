import { Router } from "express";
import db from '../../db';
import tokenCheck from "../../middlewares/tokenCheck";

const router = Router();


router.get('/', async (req, res) => {
    try {
        const books = await db.books.getAll()
        res.json(books)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error, could not retrieve all books', error})
    }
})

export default router;