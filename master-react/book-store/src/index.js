import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51lKcHdQvJL._AC_UL906_SR906,600_.jpg",
  title: "I Love You to the Moon",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91DUhtU6KCL._AC_UL906_SR906,600_.jpg",
  title: "The Lincoln Highway: A Novel",
  author: "Amor Towles",
};
//Set up vars

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img className="image" src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
