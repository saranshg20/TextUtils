import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase", "SUCCESS");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase", "SUCCESS");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "SUCCESS");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyText = (event) => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "SUCCESS");
    }

    // setText("New Text");
    return (
        <>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleCopyText}>Copy Text</button>
                <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h4>Text Summary</h4>
                <p>Text has {text.length} characters and {(text.split(/\s+g/).filter((element)=>{return element.length!==0}).length)} words</p>
                <p>Reading time around {(text.split(" ").length===1)?0:text.split(" ").length*0.008} minutes.</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
