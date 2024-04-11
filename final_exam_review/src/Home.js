import React from 'react';
import {useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    function goToLogin(){
        navigate("/Login");
    }

    return(
    <div>
        <h1>Hello World!</h1>
        <button onClick={goToLogin}>Go to Login</button>
    </div>
    );
}
export default Home;