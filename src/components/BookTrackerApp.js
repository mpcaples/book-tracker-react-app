import React, {useState} from 'react';
import Header from './Header';
import BookList from './BookList';  
import AddBook from './AddBook';
import TotalBooks from './TotalBooks';

const BookTrackerApp = () => {
    const [book_list, setBook_list] = useState([]); 
    // componentDidMount() {
    //     try {
    //         const json = localStorage.getItem('books');
    //         const books = JSON.parse(json); 
            
    //         if (books) {
    //             this.setState(() => ({book_list: books})); 
    //         }
    //     } catch (e) {
    //         // do nothin at all 
    //     }
    // }
    // componentDidUpdate(prevState) {
    //     if (prevState.book_list.length !== this.state.book_list.length) {
    //         const json = JSON.stringify(this.state.book_list)
    //         localStorage.setItem('books', json); 
    //     }
    // }
    handleAddBook = (book) => {
        if (!book) {
            return 'Enter valid value to add a book';
        } 
        if (book_list.indexOf(book) >-1) {
            return 'This book is already on your list!';
        }
        
        setBook_list(book_list.concat([book]))
    }
    handleDeleteBookList = () => {
        setBook_list([]); 
    }
    
    return (
            <div>
                <Header />
                <AddBook handleAddBook={handleAddBook} />
                <BookList book_list={book_list} handleDeleteBookList={handleDeleteBookList} />
                <TotalBooks total_books={book_list.length} />
            </div> 
        )
    
    
}

BookTrackerApp.defaultProps = {
    book_list: []
}; 
