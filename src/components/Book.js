import React from 'react'; 

function Book({count, bookText, onDeleteSingleBook}) {
    return (
        <div>
            <p>
                {count}. {bookText}
                <button onClick={() => onDeleteSingleBook(bookText)}>Delete Book</button>
            </p> 
           
        </div>
    )
}

export default Book; 