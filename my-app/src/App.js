import Navbar from './components/Navbar'
import './App.css';
import Textform from './components/Textform';


function App() {
  return (
    <>
    {/* <Navbar title='BLOGS' name="Saransh"/> */}
    <Navbar title='TextUtils'/>
    <div className="container my-3">
    <Textform heading="Enter text to convert to Uppercase"/>
    </div>
    </>
  );
}

export default App;
