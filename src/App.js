import NavbarBottom from './components/navbars/NavbarBottom'
import React, { useState } from "react";
import AppRouter from "./config/Route"

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={`${darkTheme ? "dark-theme" : ""}`}>
    <div className="App-container">
      <div className="App">
            <div className='App-content'>
              <AppRouter />
            </div>
        <NavbarBottom setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      </div>
      </div>
    </div>
  );
}

export default App;
