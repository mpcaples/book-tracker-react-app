import React from 'react';
import Book from './Book'; 

function BookList({bookList, onDeleteBookList, onDeleteSingleBook}) {
    return (
        <div>
        {bookList.length === 0 && <p>Please Add a book to get started</p>}
        <ul>
        {
            bookList.map((book, index) => (
            <li key={book} style={{listStyle:"none"}}>
                <Book
                bookText={book}
                count={index+1}
                onDeleteSingleBook={onDeleteSingleBook}
                />
            </li>
            ))
        } 
        </ul>
        {bookList.length > 0 && <button onClick={onDeleteBookList}>Remove All Books</button>}
        </div>
    );
}

export default BookList;