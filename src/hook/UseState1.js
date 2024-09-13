import {React, useState} from 'react'

function StateHook() {
    let [count, setcount] = useState(0);
    let increase = () =>{
        setcount(count + 1);
    }
    let decrease = () =>{
        if (count>0) {
            setcount(count - 1)
        }
        
    }
    return(
        <>
        <p>count : {count}</p>
        <button onClick={increase}>increase number</button>
        <button onClick={decrease}>decrease number</button>
        </>
    )
}

export default StateHook;