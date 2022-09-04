import React from 'react'
import { propTypes } from 'prop-types'
export default function Prop_and_type02(props) {
  return (
    <div>Prop_and_type02
        <h3>
          <p> Your  Name : {props.Name} </p> 
          <p>  Your Current CGPA : {props.CGPA} </p> 
          <p>  SGPA is  : {props.SGPA} </p> 
          <p> Overall Score : {props.the_Score} </p>
        </h3>
    </div>
  )
}
Prop_and_type02.defaultProps ={
    Name:'Mayur Adlak',
    CGPA:'8.34',
    SGPA:'8.5',
    the_Score:'8.5',
}
/*Prop_and_type02.propTypes = {
    Name:propTypes.string.isRequired,
    CGPA:propTypes.string,
    SGPA:propTypes.string,
    the_Score:propTypes.string

}   */