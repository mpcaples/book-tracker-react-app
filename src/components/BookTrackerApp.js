import React from 'react';
import Header from './Header';
import BookList from './BookList';  
import AddBook from './AddBook';
import TotalBooks from './TotalBooks';

export default class BookTrackerApp extends React.Component {
    state = {
        book_list: this.props.book_list
    }
    handleAddBook = (book) => {
        if (!book) {
            return 'Enter valid value to add a book';
        } else if (this.state.book_list.indexOf(book) >-1) {
            return 'This book is already on your list!';
        }
        
        this.setState((prevState) =>  ({book_list: prevState.book_list.concat([book])}))
    }
    render() {
        return (
            <div>
                <Header />
                <AddBook handleAddBook={this.handleAddBook} />
                <BookList book_list={this.state.book_list}/>
                <TotalBooks total_books={this.state.book_list.length} />
            </div> 
        )
    }
    
}

BookTrackerApp.defaultProps = {
    book_list: []
}; 
