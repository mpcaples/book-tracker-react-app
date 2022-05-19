import React from 'react'; 

function Book(props) {
    return (
        <div>
            <p>{props.count}. {props.bookText}</p> 
        </div>
    )
}

export default Book; 