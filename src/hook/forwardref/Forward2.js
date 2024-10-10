import React, { forwardRef } from 'react'

function Forward2(props, ref){
    return(
        <>
        <input type="text" ref={ref}/>
        </>
    )
}

export default forwardRef(Forward2);