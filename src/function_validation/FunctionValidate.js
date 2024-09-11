import React from 'react'
import FunctionProp1 from './FunctionValidate1'


function FunctionValidate() { 
    const data ={
        p1: "example",
        p2: "3"
    }

    return(
        <>
        <p>example no. 1</p>
        <FunctionProp1  example={data} />
        </>
    )
 }

 export default FunctionValidate