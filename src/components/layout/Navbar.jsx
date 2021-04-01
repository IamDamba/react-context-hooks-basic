import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <ThemeContext.Consumer>
          {(context) => {
            const { isAuthenticated, toogleAuth } = authContext;
            const { dark, light, isLightTheme } = context;
            const theme = isLightTheme ? light : dark;

            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Contact App</h1>
                <div>
                  <button onClick={toogleAuth}>Log</button>
                  { !isAuthenticated ? 'logged out' : 'logged in' }
                </div>
                <ul>
                  <li>Home</li>
                  <li>about</li>
                  <li>Contact</li>
                </ul>
              </nav>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default Navbar;
