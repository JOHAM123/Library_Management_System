import { Router } from "express";
import { getBooks, createBook, getBook, deleteBook, updateBook } from "../controllers/book.controllers";
const router = Router();

router.route('/')
    .get(getBooks)
    .post(createBook);

router.route('/:bookId')
    .get(getBook)
    .delete(deleteBook)
    .put(updateBook);


export default router;