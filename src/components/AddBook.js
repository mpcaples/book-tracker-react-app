import React, { useState, useEffect } from 'react'; 
import BookList from './BookList';
import TotalBooks from './TotalBooks';


const AddBook = () => {
    const [inputValue, setInputValue] = useState('');  
    const [bookList, setBookList] = useState([]); 
    const [error, setError] = useState(undefined); 
    
    
    useEffect(() => {
        const json = localStorage.getItem('books'); 
        const books = JSON.parse(json); 

        if (books) {
            setBookList(books); 
        }
       
    }, [])
    
    useEffect(() => {
        const json = JSON.stringify(bookList)
        localStorage.setItem('books', json);
    }, [bookList]);
   
    
    const onAddBook = (e) => {
        e.preventDefault(); 
        const book = inputValue.trim(); 

        // set error if user attempts to enter same book already on list 
        if (bookList.includes(book)) {
            const error = 'This book is already on your list!'
            return setError(error);
        } 
        if (!book) {
            const error = 'Enter valid value to add a book'
            return setError(error); 
        } 
        setBookList((storedValue) => storedValue.concat(book)); 
        
        
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
                <label htmlFor="book">Book:</label>
                <input value={inputValue} onChange={handleInputChange} type="text" name="book"/>
                <button onClick={onAddBook}>Add Book</button>   
                
                <BookList bookList={bookList} onDeleteBookList={onDeleteBookList} onDeleteSingleBook={onDeleteSingleBook} />
                <TotalBooks totalBooks={bookList.length} />
                </div>
        )
}

export default AddBook; 