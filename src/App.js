import './assets/scss/app.scss';
import NavigationBar from './components/NavigationBar';
import React, { useState } from "react";
import AppRouter from "./config/Route"

function App() {
  const [active, setActive] = useState('home')
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={`${darkTheme ? "dark-theme" : ""}`}>
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
      <NavigationBar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
    </div>
    </div>
  );
}

export default App;
