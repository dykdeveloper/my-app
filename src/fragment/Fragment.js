import React, {Fragment} from 'react'

function Fragment1(){
    let data = [1, 2, 3, 4, 5];
    return(
        <>
        {data.map((value, index)=>
            <Fragment key={index}>
                {value}<br />
            </Fragment>
        )}
        </>
    )
}

export default Fragment1;