import React from "react";
import Navbar from "./components/layout/Navbar";
import Booklist from "./components/booklist/Booklist";
import ThemeToogle from "./components/themeToogle/ThemeToogle";
import ThemeContextProvider from "./components/contexts/ThemeContext";
import AuthContextProvider from "./components/contexts/AuthContext";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToogle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
