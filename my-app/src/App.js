import Navbar from './components/Navbar'
import './App.css';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes
} from "react-router-dom";

function App() {

  //whether dark mode is enabled and mode 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      console.log('Toggle Mode Clicked')
      document.body.style.backgroundColor = '#120f4d';
      showAlert("Dark mode applied successfully!", "success");
      document.title = 'TextUtils | Dark Mode'
    } else {
      setMode('light');
      console.log('Toggle Mode Clicked')
      document.body.style.backgroundColor = '#d3d0fe';
      showAlert("Light mode applied successfully!", "success");
      document.title = 'TextUtils | Light Mode'
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title='BLOGS' name="Saransh"/> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />
        <div className="container my-3">
          {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
    <Textform heading="Enter text to convert to Uppercase" mode={mode}/>
          </Route>
    </Switch> */}
          {/* 
  New way to route the pages in the react-router-dom 
  */}

          {/* Use 'exact keyword to avoid react from doing partial matching of the paths */}
          <Routes>
            <Route exact path='/' element={<Textform />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
