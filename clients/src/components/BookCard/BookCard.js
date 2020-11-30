import React from 'react'

const BookCard = (props) => {

  return (
    <div className='card-container'>
      <img src={props.image} alt="" />
      <div className='desc'>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.published}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default BookCard;