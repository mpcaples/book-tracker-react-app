import React from 'react'; 

export default class AddBook extends React.Component {
    state = {
        error: undefined
    }; 
    handleAddBook = (e) => {
        e.preventDefault(); 

        const book = e.target.elements.book.value.trim();
        const error = this.props.handleAddBook(book);
        
        this.setState(() => ({error: error}));
        
        if (!error) {
            e.target.elements.book.value = '';
        }
    }
    render() {
        return (
            <div>
                
                <form onSubmit={this.handleAddBook}>
                    <input type="text" name="book"/>
                    <button>Add Book</button>
                </form>
            </div>
        )
    }
}