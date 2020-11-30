import React, { Component } from 'react';
import SearchArea from '../components/SearchArea/SearchArea';
import request from 'superagent'
import {Card, Button, Row, Col, Container, Image} from 'react-bootstrap'
import API from "../utils/API";


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ books: [...data.body.items] })
      })
  }

  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({ searchField: e.target.value })
  }

  onClickFunc = () => {
    this.props.saveGoogleBook(this.props)//.bind(this, this.props);
}

  saveGoogleBook = currentBook => {
    console.log("This is the current book", currentBook);
    API.saveBook({
        id: currentBook.id,
        title: currentBook.title,
        authors: currentBook.authors,
        description: currentBook.description,
        image: currentBook.image,
        link: currentBook.link
    })
    .then(res => console.log("Successful POST to DB!", res))
    .catch(err => console.log("this is the error", err));
}

  render() {
    return (
      <div>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <div className='List' style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            this.state.books.map((book) => {
              console.log(book)
              return (
                <Container style={{ display: 'flex', margin: '30px 0 30px'}} fluid>
                  <Image src={book.volumeInfo.imageLinks.thumbnail}  thumbnail />
                  <Card style={{ width: '100%'}}>
                  <Card.Body>
                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                    <Card.Text>
                    {book.volumeInfo.description}
                    </Card.Text>
                    <Button onClick={this.onClickFunc} variant="primary">Add to Library</Button>
                    <Button href={book.volumeInfo.previewLink} target="_blank" variant="danger">View Book</Button>
                  </Card.Body>
                  </Card>
                </Container>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Books;