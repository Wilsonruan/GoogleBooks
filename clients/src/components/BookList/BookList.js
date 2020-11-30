import React, { useState } from 'react';


export default function BookList (props) {
  

  return (
    <div className='List' style={{display: 'flex'}}>
      {
        props.books.map((book, i) => {
          return (
            <div className='card-container'>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
              <div className='desc'>
                <h2>{book.volumeInfo.title}</h2>
                <h3>{book.volumeInfo.author}</h3>
                <p>{book.volumeInfo.publishedDate}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
