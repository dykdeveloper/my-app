import React, {useState} from 'react'

function Form1(){
    const [name, setname] = useState('');

    const submitname = (e) =>{
        e.preventDefault();
        alert('my name is ' + name)
    }

    const changename = (e) =>{
        setname(()=>e.target.value)
    }

    return(
        <>
        <form onSubmit={submitname}>
            <label>
            Name:
            <input type="text" name='name' value={name} onChange={changename}/>
            </label>
            <input type="submit"/>
        </form>
        </>
    )
}

export default Form1;