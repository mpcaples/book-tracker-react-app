import React from 'react'; 

function Book(props) {
    return (
        <div>
            <p>
                {props.count}. {props.bookText}
                <button onClick={() => props.onDeleteSingleBook(props.bookText)}>Delete Book</button>
            </p> 
           
        </div>
    )
}

export default Book; 