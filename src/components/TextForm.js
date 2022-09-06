import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("");

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Uper case is clicked","success");
  }

  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("lower case is clicked","success");
  }

  const handleSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("spaces are removed","success");
  }

  const handleCopy=()=>{
    let text=document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  


  return (
    <>
    <div className='container'>
  
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.textwrite}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to upper case</button>
<button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lower case</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
<button className='btn btn-primary mx-2' onClick={handleSpaces}>Remove spaces</button>
    </div>
    
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").filter((t)=>t!=="").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text in the textbox to preview it here"}</p>
    </div>
          </>
  )
}
