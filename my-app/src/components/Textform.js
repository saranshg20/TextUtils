import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter Text Here');

    const handleUpClick=()=>{
        console.log("Button was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        console.log("Handle on Change");
        setText(event.target.value);
    }

    // setText("New Text");
  return (
    <>
  <label htmlFor="text-area" className="form-label">{props.heading}</label>
        <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
  <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
    </>
  )
}
