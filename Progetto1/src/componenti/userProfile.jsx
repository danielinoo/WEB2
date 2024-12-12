//import './userProfile.css'

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


function UserProfile(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
   
    const handNameChange = (e) =>{
        setName(e.target.value);
    };

    const handEmailChange = (e) =>{
        setEmail(e.target.value);
    };

    return(
        <div>
            <h1>Profilo Utente</h1>
            <label>
                Nome:
                <input type="text" value={name} onChange={handNameChange}></input>
            </label>
            <label>
                <br></br>
                email:
                <input type="text" value={email} onChange={handEmailChange}></input>
            </label>
            <h3>Dati inseriti:</h3>
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
};

export default UserProfile;