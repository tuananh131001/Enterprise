import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51lKcHdQvJL._AC_UL906_SR906,600_.jpg",
    title: "I Love You to the Moon",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91DUhtU6KCL._AC_UL906_SR906,600_.jpg",
    title: "The Lincoln Highway: A Novel",
    author: "Amor Towles",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // return <Book key={book.id} book={book}></Book>;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// props destrcutung input
const Book = ({img, title, author}) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Cho Quan");
  };
  const complexExample = () =>{

  }
  // //props destructing
  // const { img, title, author } = props.book;

  return (
    <article className="book">
      <img className="image" src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}> Example</button>
      <button type=""></button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
