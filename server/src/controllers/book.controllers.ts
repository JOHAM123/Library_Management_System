import { Request, Response, response } from 'express';
import * as sequelize from 'sequelize';
import books from "../model/books";
import { Book } from '../interface/book';


export async function getBooks(req: Request, res: Response): Promise<Response | void> {


   try {

      books.
         findAll()
         .then(book => {
            return res.status(200).json(book);

         })
         .catch(err => console.log(err));

      // const conn = await connect();
      // const book = await conn.query('SELECT * FROM books');
   } catch (error) {
      console.log(error);
   }
}

export async function createBook(req: Request, res: Response): Promise<Response | void> {
   const { author, title }: Book = req.query;
   // const conn = await connect();
   // console.log(newBook);
   // await conn.query(`INSERT INTO books (author, title) VALUES ('${newBook.author}', '${newBook.title}')`) ;
   books.create({
      author: author,
      title: title
   }).then(result => {

      res.json(result
      );
   })
      .catch(err => {
         console.log(err);
      });

}


export async function getBook(req: Request, res: Response): Promise<Response | void> {

   const id = parseInt(req.params.bookId);
   // const conn = await connect();
   // const book = await conn.query(`SELECT * FROM books WHERE id =  ${id} `);
   books.findOne({ where: { id: id } })
      .then(result => {
         res.json(result);
      })
      .catch(err => {
         console.log(err);
      });



}


export async function deleteBook(req: Request, res: Response): Promise<Response | void> {
   const id = req.params.bookId;
   // const conn = await connect();
   // await conn.query(`DELETE FROM books WHERE id = ${id}`);

   books.destroy({ where: { id: id } })
      .then(result => {
         res.json(result);
      })
      .catch(err => {
         console.log(err);
      });

}


export async function updateBook(req: Request, res: Response): Promise<Response | void> {
   const id = req.params.bookId;
   const { author, title }: Book = req.query;
   // const conn = await connect();
   // await conn.query(`UPDATE books set author = '${updateBook.author}' ,  title = '${updateBook.title}' WHERE id = ${id}`);

   books.update({
   author: author
   }, {
      where: { id: id }
   }).then(result => {

      res.json(result
      );
   })
      .catch(err => {
         console.log(err);
      });

}


export async function login(req: Request, res: Response): Promise<Response | void> {

   // const { username , password } = req.query;

   // try {
   //     const conn = await connect();
   //     const userExist = await conn.query(`SELECT COUNT(*) FROM users where username = '${username}' and password = '${password}'`);

   //      if(userExist > 0){
   //       return res.status(200).json("exist"); 
   //      } else {
   //       return res.status(200).json("notExist"); 
   //      }
   // } catch (error) {
   //    console.log(error);      
   // }

}