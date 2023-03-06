import React, { Component } from 'react';

class StateDemo extends Component {
    // save the initial data in state(initial value)
    state = {
        author_name: '',
        book_name: ''
    }

    // member function for changing book name
    setBookName(e) {
        this.setState({
            book_name: e.target.value
        })
    }
    // member function for changing author name
    setAuthorName(e) {
        this.setState({
            author_name: e.target.value
        })
    }
    render() {
        return (
            <div id='statedemo'>
                <input 
                style={{fontSize: '20px', borderRadius: '20px', border: 0,padding: '15px 10px'}}
                type="text" 
                placeholder=' Enter Book Name' 
                onChange={
                    (e) => { this.setBookName(e) }
                } />
                <br />
                <input 
                style={{fontSize: '20px', borderRadius: '20px', border: 0, padding: '15px 10px'}}
                type="text" 
                placeholder=' Enter Author Name' 
                onChange={
                    (e) => { this.setAuthorName(e) }
                } />
                <br />
                <div style={{fontSize: '20px', borderRadius: '20px', border: 0, padding: '5px'}}>
                    Author Name: {this.state.author_name}
                    <br />
                    <br />
                    Book Name: {this.state.book_name}
                </div>
            </div>
        );
    }
}

export default StateDemo;