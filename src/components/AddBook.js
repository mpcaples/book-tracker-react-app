import React, {useState} from 'react'; 
import BookList from './BookList';
import TotalBooks from './TotalBooks';


const AddBook = () => {
    const [inputValue, setInputValue] = useState('');  
    const [bookList, setBookList] = useState([]); 
    const [error, setError] = useState(undefined); 
    
    
    const onAddBook = (e) => {
        e.preventDefault(); 
        const book = inputValue.trim(); 

        // set error if user attempts to enter same book already on list 
        if (bookList.indexOf(book) >-1) {
            const error = 'This book is already on your list!'
            setError(error);
        } else if (!book) {
            const error = 'Enter valid value to add a book'
            setError(error); 
        } else {
            setBookList((storedValue) => storedValue.concat(book)); 
        }
        
        //clear input
        setInputValue(''); 
        
    }
    const handleInputChange = (event) => {
        const currentValue = event.target.value
        setInputValue(currentValue)
    }
    const onDeleteBookList = () => {
        setBookList([]); 
    }
    //start here next time 
    //currently deleting ALL the books 
    const onDeleteSingleBook = (bookToDelete) => {
        setBookList(bookList.filter(book => {
            return book !== bookToDelete
        }))
    }
    return (
            <div>
                {error && <p>{error}</p>}
                <input value={inputValue} onChange={handleInputChange} type="text" name="book"/>
                <button onClick={onAddBook}>Add Book</button>   
                
                <BookList bookList={bookList} onDeleteBookList={onDeleteBookList} onDeleteSingleBook={onDeleteSingleBook} />
                <TotalBooks total_books={bookList.length} />
                </div>
        )
}

export default AddBook; 