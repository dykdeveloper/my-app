import React from 'react'
import PropTypes from 'prop-types'


function FunctionValidate1(props) { 
    return(
        <>
        <p>example no. 2</p>
        <p>{props.example.p1} {props.example.p2}</p>
        </>
    )
 }

 export default FunctionValidate1

 FunctionValidate1.prototypes = {
    p1: PropTypes.string,
    p2: PropTypes.number.isRequired
 }