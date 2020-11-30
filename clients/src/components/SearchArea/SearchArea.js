import React from 'react';
import { Form, Button, Jumbotron, Col } from "react-bootstrap";
import './SearchArea.css'

const SearchArea = (props) => {
  return (
    <Jumbotron id='contextJumbotron' >
      <Form id='contextSearch' className="float" onSubmit={props.searchBook} action="">
        <Form.Label>Search for Books</Form.Label>
        <Form.Row controlId="formBasicEmail">
          <Col sm={8}>
            <Form.Control className="mb-2" onChange={props.handleSearch} type="text" type="text" placeholder="e.g. Javascript" />
          </Col>
          <Col sm={4}>
            <Button variant="primary" type="submit">Search</Button>
          </Col>
        </Form.Row>
      </Form>
    </Jumbotron>
  )
}


export default SearchArea;