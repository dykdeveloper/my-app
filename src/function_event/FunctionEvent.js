import React from 'react'


function FunctionEvent() {
   const clickme = () => alert("clicked!")
   let gettext = (param) => alert(param)

    return(
        <>
        <button onClick={clickme}>click me!</button>
        <button onMouseOver={()=>alert("mousehover")}>mouse hover</button>
        <button onMouseEnter={()=>alert("mouse enter")}>mouse enter</button>
        <button onClick={()=> gettext('hello, how are you!')}>get text</button>
        </>
    )
 }

 export default FunctionEvent