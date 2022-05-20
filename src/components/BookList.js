import React from 'react';
import Book from './Book'; 


function BookList(props) {
    return (
        <div>
        {props.book_list.length === 0 && <p>Please Add a book to get started</p>}
        {
            props.book_list.map((book, index) => (
                <Book
                    key={book} 
                    bookText={book}
                    count={index+1}
                />
            ))
        } 
        {props.book_list.length > 0 && <button onClick={props.handleDeleteBookList}>Remove All Books</button>}
        </div>
    );
}

export default BookList;