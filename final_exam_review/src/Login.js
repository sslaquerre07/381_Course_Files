import React, {useState} from 'react';
import './Login.css';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordC, setPasswordC] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        if(password === passwordC && password !== ""){
            setMessage("Success");
        }
        else if(password === ""){
            setMessage("Password must be at least one character");
        }
        else{
            setMessage("Passwords are different");
        }
        event.preventDefault();
    }

    return(
        <div className='loginField'>
            <form onSubmit={handleSubmit}>
                <p>{message}</p>
                <label htmlFor='username'>Username:</label>
                <input id='username' type='textarea' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
                <br/>
                <label htmlFor='password'>Password:</label>
                <input id='password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <label htmlFor='passwordC'>Confirm Password:</label>
                <input id='passwordC' type='password' onChange={(e) => setPasswordC(e.target.value)}></input>
                <br />
                <button type='submit'>Submit</button>
            </form>
            <a href='/'>Home</a>
        </div>
    );
}
export default Login;