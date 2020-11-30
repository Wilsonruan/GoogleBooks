import React from 'react'
import './Header.css'
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
  <header>
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Link id='contextHeader' href="/">Google Books</Nav.Link>
      <Nav.Link id='contextHeader' href="/">Home</Nav.Link>
      <Nav.Link id='contextHeader' href="/library">Library</Nav.Link>
    </Nav>
  </header>
  )
}

export default Header;
