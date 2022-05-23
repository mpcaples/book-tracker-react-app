import React, {useState} from 'react'; 

const AddBook = (props) => {
    const [error, setError] = useState(undefined);  
    const handleAddBook = (e) => {
        e.preventDefault(); 

        const book = e.target.elements.book.value.trim();
        const error = props.handleAddBook(book);
        
        setError(error);
        
        if (!error) {
            e.target.elements.book.value = '';
        }
    }
    
    return (
            <div>
                
                <form onSubmit={handleAddBook}>
                    <input type="text" name="book"/>
                    <button>Add Book</button>
                </form>
            </div>
        )
}

export default AddBook; 