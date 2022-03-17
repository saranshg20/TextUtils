import Navbar from './components/Navbar'
import './App.css';
import Textform from './components/Textform';
// import About from './components/About';


function App() {
  return (
    <>
    {/* <Navbar title='BLOGS' name="Saransh"/> */}
    <Navbar title='TextUtils'/>
    <div className="container my-3">
    <Textform heading="Enter text to convert to Uppercase"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
