import React, {useState} from 'react'

function LiftState1({update}){
    const [count, setcount] = useState(0)

    const increase = () =>{
        const newdata = count + 1;
        setcount(newdata);
        update(newdata)
    }
    return(
        <>
        <h1>child component</h1>
        <button onClick={increase}>increase</button>
        </>
    )
}

export default LiftState1;