import Navbar from './components/Navbar'
import './App.css';
import Textform from './components/Textform';
// import About from './components/About';
import React, {useState} from 'react';

function App() {
  
  //whether dark mode is enabled and mode 
  const [mode, setMode] = useState('light');
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      console.log('Toggle Mode Clicked')
      document.body.style.backgroundColor = '#0f30d4';
    }else{
      setMode('light');
      console.log('Toggle Mode Clicked')
      document.body.style.backgroundColor = '#d3d0fe';
    }
  }
  return (
    <>
    {/* <Navbar title='BLOGS' name="Saransh"/> */}
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Textform heading="Enter text to convert to Uppercase" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
