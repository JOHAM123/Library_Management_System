import { Request, Response } from 'express';
import { connect } from "../database";
import { Book } from '../interface/book';

export async function getBooks(req: Request, res: Response): Promise<Response | void> {
  
   try {
      const conn = await connect();
      const book = await conn.query('SELECT * FROM books');
        return res.status(200).json({data:book.rows}); 
   } catch (error) {
      console.log(error);      
   }
}

export async function createBook(req: Request, res: Response):Promise<Response | void >{
   const newBook:Book = req.query;
   const conn = await connect();
   console.log(newBook);
   await conn.query(`INSERT INTO books (author, title) VALUES ('${newBook.author}', '${newBook.title}')`) ;
   res.json({
       message: 'New Book Created'
   });}


export async function getBook(req: Request, res: Response): Promise<Response | void >{

   const id = parseInt(req.params.bookId);
   const conn = await connect();
   const book = await conn.query(`SELECT * FROM books WHERE id =  ${id} `);
   res.json(book.rows);

}


export async function deleteBook(req: Request, res: Response):Promise<Response | void> {
   const id = req.params.bookId;
   const conn = await connect();
   await conn.query(`DELETE FROM books WHERE id = ${id}`);
   res.json({
       message: 'Book deleted'
   });
}


export async function updateBook(req: Request, res: Response): Promise<Response | void >{
   const id = req.params.bookId;
   const updateBook: Book = req.query;
   const conn = await connect();
   await conn.query(`UPDATE books set author = '${updateBook.author}' ,  title = '${updateBook.title}' WHERE id = ${id}`);
   res.json({
       message: 'Book Updated'
   });
}