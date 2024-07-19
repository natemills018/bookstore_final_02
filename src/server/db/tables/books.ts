import { SelectQuery, ModifyQuery } from "../../queryUtils";
import { Book } from "../../types";
import { NewBook } from "../../types";



export function getOne(id: number) {
    return SelectQuery<Book>('SELECT * FROM Books WHERE id = ?', [id])
}

export function getAll(){
    return SelectQuery<Book>('SELECT Books.id, Books.title, Books.price, Books.author, Books.category_id, Books.created_at, Categories.name from Books JOIN Categories ON Books.category_id = Categories.id')
}


export function deleteBook(id: number) {
    return ModifyQuery<Book>('DELETE FROM Books WHERE id = ?', [id])
}

export function addBook(newBook: NewBook) {
    return ModifyQuery('INSERT INTO Books SET ?', [newBook])
}

export function updatedBook(updatedBook: string, id: number) {
    return ModifyQuery('UPDATE Books SET ? WHERE id =?;', [updatedBook, id])
}


