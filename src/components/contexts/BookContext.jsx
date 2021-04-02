import React, { createContext, useState, useReducer, useEffect } from "react";
import { bookReducer, initState } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, [], initState);

  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
