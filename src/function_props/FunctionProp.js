import React from 'react'
import FunctionProp1 from './FunctionProp1'


function FunctionProp() { 
    const data ={
        p1: "example no. 2",
    }

    return(
        <>
        <p>example no. 1</p>
        <FunctionProp1  example={data} />
        </>
    )
 }

 export default FunctionProp