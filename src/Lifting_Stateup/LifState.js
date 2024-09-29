import React, {useState} from 'react'
import LiftState1 from './LiftState1';

function LiftState(){
    const [count, setcount] = useState(10)

    const increase = (e) =>{
        setcount(e)
    }

    return(
        <>
        <h1>parent component</h1>
        <p>{count}</p>
        <LiftState1 update={increase}/>
        </>
    )
}

export default LiftState;