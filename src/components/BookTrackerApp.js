import React from 'react';
import Header from './Header';
import BookList from './BookList';  
import AddBook from './AddBook';
import TotalBooks from './TotalBooks';
import Counter from './Counter'; 

const BookTrackerApp = () => {
    
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
    
    return (
            <div>
                <Header />
                <AddBook />   
            </div> 
        )
    
    
}

export default BookTrackerApp; 