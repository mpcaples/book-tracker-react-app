import React from 'react';
import Book from './Book'; 

function BookList(props) {
    return (
        <div>
        {props.bookList.length === 0 && <p>Please Add a book to get started</p>}
        {
            props.bookList.map((book, index) => (
                <Book
                    key={book} 
                    bookText={book}
                    count={index+1}
                    onDeleteSingleBook={props.onDeleteSingleBook}
                />
            ))
        } 
        {props.bookList.length > 0 && <button onClick={props.onDeleteBookList}>Remove All Books</button>}
        </div>
    );
}

export default BookList;