import React,{useState,Event} from 'react';

export default function State_in_react(props) {
  const handleClick=()=>{
    console.log("Handle Clicked ");
    // setText("You Have Clicked Handler"+text);
    let temp=text.toLocaleUpperCase();
    setText(temp);
    // document.write("You Have clicked change handleClick");
  }
  const LowerClick=()=>{
    let low=text.toLocaleLowerCase();
    setText(low);
  }
  const clearText=()=>{
    setText(""); 
  }
  const copyText=()=>{
    var text = document.getElementById("textarea");

    /* Select the text field */
    text.select();
    text.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(text.value);
    document.getElementById('showcopy').innerText('copied to clipboard');
      }
  const changeHandler=(event)=>{
    console.log(" on change ");
    setText(event.target.value);
  }

  
    const [text,setText] =useState("You can Write Here ");
  return (
    <div className="container">
 <h3> Enter Text for Analyze </h3>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <div className="mb-3 container">
          <h1 id='showcopy'></h1>
            <label htmlFor="myBox" className="form-label"> {props.head} </label>
            <textarea name="" onChange={changeHandler} className="form-control" id="textarea" cols="" value={text} rows="8"></textarea>
            <button className="btn btn-primary btn-sm my-3" onClick={handleClick}>Covert To Uppercase</button>
            <button className="btn btn-primary btn-sm ml-3" onClick={LowerClick}>Covert To Lowercase</button>
            <button className="btn btn-danger btn-sm ml-3" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary btn-sm ml-3" onClick={copyText}>Copy</button>
        </div>
        <h3> Your text Summary </h3>
        <p> Number of Word :<b> {text.split(' ').length-1} </b> </p>
        <p> Number of Charecter :<b> {text.length} </b> </p>
    </div>
  )
}
