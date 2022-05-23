import React from 'react';
import Header from './Header';
import BookList from './BookList';  
import AddBook from './AddBook';
import TotalBooks from './TotalBooks';

export default class BookTrackerApp extends React.Component {
    state = {
        book_list: this.props.book_list
    }
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
        } else if (this.state.book_list.indexOf(book) >-1) {
            return 'This book is already on your list!';
        }
        
        this.setState((prevState) =>  ({book_list: prevState.book_list.concat([book])}))
    }
    handleDeleteBookList = () => {
        this.setState(() => ({book_list: []})); 
    }
    render() {
        return (
            <div>
                <Header />
                <AddBook handleAddBook={this.handleAddBook} />
                <BookList book_list={this.state.book_list} handleDeleteBookList={this.handleDeleteBookList} />
                <TotalBooks total_books={this.state.book_list.length} />
            </div> 
        )
    }
    
}

BookTrackerApp.defaultProps = {
    book_list: []
}; 
