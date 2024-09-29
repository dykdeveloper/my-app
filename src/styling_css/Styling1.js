import React from 'react'
import './Style.css'
import Styles from './Style.module.css'
import 'bootstrap/dist/css/bootstrap.css'

function Styling1(){
    return(
        <>
        <h1>my name is yash</h1>
        <p className={Styles.text}>i am yash</p>
        <p className='text-danger'>hello</p>
        </>
    )
}

export default Styling1;