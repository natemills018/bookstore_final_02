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

router.get('/:id', async (req, res) => {
    try {
            const id = parseInt(req.params.id, 10)
            const [book] = await db.books.getOne(id)
            
            if(!book) {
                return res.status(404).json({ message: 'No book found at this id'})
            }
            res.json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error, could not retrieve book', error})
    }
})


router.delete('/:id', tokenCheck, async (req, res) => {
    try {
         const id = parseInt(req.params.id, 10)
         const deletedBook = req.body;
         console.log({ id, bookData: deletedBook})
         await db.books.deleteBook(id)
         res.json({ message: `The book at id number ${id} has been wiped off of the server`})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server error, could not delete book', error})
    }
})

router.put('/:id', tokenCheck, async(req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const updatedBook = req.body;
        await db.books.updatedBook(updatedBook, id);
        res.json({message: `You have update the book at id ${id}`})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server error, could not update book', error})
    }
})

router.post('/', tokenCheck, async(req, res) => {
    try {
        const {title, price, author, category_id} = req.body

        if(!title || !price || !author || !category_id) {
            return res.status(400).json({ message: 'You must be missing one of the required properties'})
        }
        const results = await db.books.addBook({ title, price, author, category_id})
    
        res.status(201).json({ message: 'Yes! We added your book!', id: results.insertId})
        console.log(results);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server error, could not add book', error})
    }
})

export default router;


