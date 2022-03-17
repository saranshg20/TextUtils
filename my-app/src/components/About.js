import React, {useState} from 'react'

export default function About() {
    
    const [myStyle, setStyle] = useState({
        color:'white',
        backgroundColor:'black',
        border:'0.5px solid white'
    })  

    const [btnText, setBtnText] = useState("Enable Light Mode");

    const toggleStyle=()=>{
        if(myStyle.color==='white'){
            setStyle({
                color:'gray',
                backgroundColor:'white',
                border: '0.25px solid gray'  
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setStyle({
                color: 'white',
                backgroundColor:'black',
                border:'0.5px solid white'
            })
            setBtnText('Enable Light Mode')
        }
    }
    
  return (
    <div style={myStyle}>
            <h2 className='mx-2'>About Us</h2>
            <div className="accordion" id="accordionExample">
    <div className="accordion-item mx-2" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item mx-2" style={myStyle}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item mx-2" style={myStyle}>
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
    <div className="container my-3">
    <button onClick={toggleStyle} className='btn btn-primary' type='button'>{btnText}</button>
    </div>
    </div>
  )
}
