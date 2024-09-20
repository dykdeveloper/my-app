import React from "react";

function List1() {
    const data = [1,2,3,4,5,6,7,8,9,10]



  return (
    <>
    {data.map((ele)=>{
        return <li>{ele}</li>
    })}
    </>
  );
}

export default List1;
