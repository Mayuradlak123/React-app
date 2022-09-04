import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import React,{useState} from 'react'
export default function State_learning() {
    function dashboard(){
        window.location.reload();
    }
   const [myStyle,setStyle]=useState({
    color:'white',
    backgroundColor:'black',
   });
  const ToggleStyle=()=>{
    if(myStyle.color=='white'){
        <div> Dark Color Enabled</div>
        setStyle({
            color:'black',
            backgroundColor:'white',
        })
   }
   else{
    <div>Light Color Enable</div>
    setStyle({ 
        color:'white',
        backgroundColor:'black',
       })
   }
}
const blueToggle=()=>{
//  document.write( `<div> Blue Toggle is Enabled</div>`);
  setStyle({
    color:'white',
    backgroundColor:'blue',
  })
}
const greenToggle=()=>{
  setStyle({
    color:'white',
    backgroundColor:'green',
  })
}
const cyanToggle=()=>{
  setStyle({
    color:'white',
    backgroundColor:'cyan',
  })
 }
    // this.state = state;
  return (
        <div style={myStyle} >
           
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  >
                 <a class="navbar-brand" href="" >Dashboard</a>
                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                         <div class="collapse navbar-collapse" id="navbarText">
                           <ul class="navbar-nav mr-auto">
                             <li class="nav-item active">
                                 <Link class="navbar-brand" to="/application">Home <span class="sr-only">(current)</span></Link>
                                  </li>
                              <li class="nav-item active">
                              <a class="navbar-brand" href="#">About us</a>
                               </li>
                          <li class="nav-item active">
                  <a class="navbar-brand" href="#">Contact us</a>
                   </li>
                </ul>
              <span class="navbar-text">
             <a href="" className="btn btn-success">Refresh </a>
             <label class="switch">
  <input type="checkbox"/>
  <span class="slider round my-3"></span>
</label>

            </span>
    </div>
    </nav>
    <h3 className="my-3 ml-3">Enter Your Text Below </h3>
    <div class="alert alert-success container" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr/>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
<div className="container">
<button className='btn btn-primary ml-5' onClick={ToggleStyle}>Enable Dark </button>
<button className='btn btn-primary ml-5' onClick={blueToggle}>Enable blue </button>
<button className='btn btn-primary ml-5' onClick={greenToggle}>Enable lighgreen </button>
<button className='btn btn-primary ml-5' onClick={cyanToggle}>Enable cyan</button>
</div>
     </div>
  );
}
