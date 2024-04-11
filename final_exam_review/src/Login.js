import React from 'react';
import './Login.css';

function Login(){
    return(
        <div className='loginField'>
            <label htmlFor='username'>Username:</label>
            <input id='username' type='textarea' placeholder='username'></input>
            <br/>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password'></input>
            <label htmlFor='passwordC'>Confirm Password:</label>
            <input id='passwordC' type='password'></input>
        </div>
    );
}
export default Login;