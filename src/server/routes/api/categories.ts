import { Router } from "express";
import db from "../../db";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const categories = await db.categories.getAll()
        res.json(categories);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error, could not retrieve categories', error})
    }
})

export default router;