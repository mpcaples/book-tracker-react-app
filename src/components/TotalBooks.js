import React from 'react'; 

const TotalBooks = (props) => {
    return (
        <div>
            <p>You have read {props.totalBooks} {props.totalBooks !== 1 ? "books" : "book"}.</p>
        </div>
    )
}

export default TotalBooks; 