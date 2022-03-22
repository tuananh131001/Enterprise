import React from 'react'

// props destrcutung input
const Book = ({ img, title, author }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
      alert("Cho Quan");
    };
    const complexExample = () => {
      console.log(author);
    };
    // //props destructing
    // const { img, title, author } = props.book;
  
    return (
      <article className="book" onMouseOver={() => {
        console.log(title)
      }}>
        <img className="image" src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>
          {" "}
          Example
        </button>
        <button type="button" onClick={() => complexExample(author)}>
          {" "}
          more complex example
        </button>
      </article>
    );
  };

export default Book