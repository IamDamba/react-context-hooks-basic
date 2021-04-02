import React from "react";
import Navbar from "./components/layout/Navbar";
import Booklist from "./components/booklist/Booklist";
import BookContextProvider from "./components/contexts/BookContext";

import './pages/css/app.css';
import BookForm from "./components/bookform/BookForm";

const App = () => {
  return (
    <div className="app">
      <BookContextProvider>
        <Navbar />
        <Booklist/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
};

export default App;
