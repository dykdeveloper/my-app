import React, {useRef} from "react";

function UseRefhook(){
    const inputelement = useRef();
    const h1 = useRef();

    const focusinput = () =>{
        console.log(inputelement);
        
        inputelement.current.focus();
        h1.current.style.color = 'green';
    }
    return(
        <>
        <h1 ref={h1}>useref hook</h1>
        <input type="text" ref={inputelement} />
        <button onClick={focusinput}>focus input</button>
        </>
    )
}

export default UseRefhook;