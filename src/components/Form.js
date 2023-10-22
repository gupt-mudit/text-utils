import React from 'react'
import { useState } from 'react'

export default function Form(props) {
    const[text,setText]=useState('Enter text here');
    let handlechange=(event)=>{
        
       
       setText(event.target.value);

    };
    let handleup=()=>{
        let temp=text.toUpperCase();
       setText(temp);
       props.setAlerttext("sentence is uppercased");
       setTimeout(() => {
        props.setAlerttext(null);
       }, 3000);
    };
    let handlelo=()=>{
        let temp=text.toLowerCase();
       setText(temp);
       props.setAlerttext("sentence is lowercased");
       setTimeout(() => {
        props.setAlerttext(null);
       }, 3000);
    };
  return (
    
<div className={`container bg-${props.mode} my-3` } style={{borderRadius:14}}>
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>Type your text here</label>
  <textarea className="form-control " id="exampleFormControlTextarea1" value={text} rows="7" cols="50" onChange={handlechange}></textarea>
  </div>
  <button type="button" class="btn btn-success mx-1" onClick={handleup}>Convert to Uppercase</button>
  <button type="button" class="btn btn-success mx-1" onClick={handlelo}>Convert to Lowercase</button>
  <div className={`my-4 py-2 text-${props.mode==='light'?'dark':'light'}`}>
    <h3>Summary</h3>
    <p>length of text is {text.length} and number of words are {text.split(" ").length}</p>
    
  </div>

  </div>
  )
}
