import './assets/scss/app.scss';
import NavbarBottom from './components/navbars/NavbarBottom'
import React, { useState } from "react";
import AppRouter from "./config/Route"

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={`${darkTheme ? "dark-theme" : ""}`}>
      <div className="App-container">
        <div className="App">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2'></div>
              <div className='col-lg-8 col-md-12 mt-md-5 mt-3'>
                <AppRouter />
              </div>
              <div className='col-lg-2'>{darkTheme}</div>
            </div>
          </div>
          <NavbarBottom setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        </div>
      </div>
    </div>
  );
}

export default App;
