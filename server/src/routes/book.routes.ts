import { Router } from "express";
import { getBooks, createBook, getBook, deleteBook, updateBook ,login } from "../controllers/book.controllers";
const router = Router();


router.route('/login')
.get(login);

router.route('/')
    .get(getBooks)
    .post(createBook);

router.route('/:bookId')
    .get(getBook)
    .delete(deleteBook)
    .put(updateBook);


export default router;