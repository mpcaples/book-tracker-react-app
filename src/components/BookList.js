import React from 'react';
import Book from './Book'; 


function BookList(props) {
    return (
        <div>
        {
            props.book_list.map((book, index) => (
                <Book
                    key={book} 
                    bookText={book}
                    count={index+1}
                />
            ))
        } 
        </div>);
}

export default BookList;