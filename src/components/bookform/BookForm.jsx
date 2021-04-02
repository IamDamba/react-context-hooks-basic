import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const {dispatch} = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch({type: "ADD_BOOK", book:{
      title: title,
      author: author
    }});
    setTitle("")
    setAuthor("")
  }

  return (
    <form onSubmit={handleSubmit.bind(this)}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type='submit'>Add book</button>
    </form>
  );
};

export default BookForm;