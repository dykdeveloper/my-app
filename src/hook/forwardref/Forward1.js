import React, { useRef } from 'react'
import Forward2 from './Forward2';

function Forward1(){
    const data = useRef(0);

    function adddata(){
        data.current.value = 1000;
        data.current.style.color = "red";
    }
    return(
        <>
        <Forward2 ref={data} />
        <button onClick={adddata}>Add</button>
        </>
    )
}

export default Forward1;