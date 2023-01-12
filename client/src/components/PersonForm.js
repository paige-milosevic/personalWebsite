import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button'

import '@fontsource/roboto/500.css';

const PersonForm = () => {
    const [ firstName, setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http:://localhost:8000/api/person', {
            firstName,
            lastName
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
                console.log('Error Creating Person')
            })
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
                </div>
                <Button variant="contained">Submit</Button>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default PersonForm;