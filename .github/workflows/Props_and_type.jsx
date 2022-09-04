import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
   <div>
    <nav>
          <h2>Hello I'm : <a href="{props.name}"></a></h2>
          <h2>My Age is  :  {props.age} </h2>
          <h2>My college is  :  {props.college} </h2>
          <h4>Linkdeln Profile : <a href="https://www.linkedin.com/in/mayur-adlak-31b962220/">{props.profile}</a> </h4>
    </nav>
    
    </div>

    );
}
Navbar.PropTypes={name:PropTypes.string,
                  age:PropTypes.string,
                  college:PropTypes.string,
                  profile:PropTypes.string
           };
Navbar.defaultProps = {
   name:"Mayur",
   Age:"20",
   college:"OIST",
   profile:"#"
};