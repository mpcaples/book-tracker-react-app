import React from 'react'; 

const TotalBooks = (props) => {
    return (
        <div>
            <p>You have read {props.total_books} {props.total_books !== 1 ? "books" : "book"}.</p>
        </div>
    )
}

export default TotalBooks; 