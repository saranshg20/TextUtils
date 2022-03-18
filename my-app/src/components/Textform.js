import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        console.log("Button was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Button was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        console.log("Button was Clicked");
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("Handle on Change");
        setText(event.target.value);
    }

    // setText("New Text");
    return (
        <>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h4>Text Summary</h4>
                <p>Text has {text.length} characters and {(text.split(" ").length===1)?0:text.split(" ").length} words</p>
                <p>Reading time around {(text.split(" ").length===1)?0:text.split(" ").length*0.008} minutes.</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
