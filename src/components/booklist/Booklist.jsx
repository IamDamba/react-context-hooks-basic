import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

import BookDetail from '../bookdetail/BookDetail';

const Booklist = () => {
  const { books } = useContext(BookContext);

  return  books.length ? (
    <ul className="book-list">
      {
        books.map(book =>(
          <BookDetail book={book} key={book.id} />
        ))
        
      }
    </ul>
  ) :(
    <div className="empty">
      No books to read
    </div>
  )
};

export default Booklist;
