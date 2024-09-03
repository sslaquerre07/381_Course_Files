import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css';

function Home(){
    const navigate = useNavigate();
    const [footerVisible, setFooterVisible] = useState(true);

    const footer = 
        <div>
            <p>This is the optional footer, click the button to toggle its visibility</p>
        </div>;

    function goToLogin(){
        navigate("/Login");
    }

    function toggleFooter(){
        localStorage.setItem('newVisibility', !footerVisible);
        setFooterVisible(!footerVisible);
    }

    useEffect(() => {
        console.log(localStorage.getItem('newVisibility'));
    }, [footerVisible]);

    return(
    <div>
        <h1>Hello World!</h1>
        <button onClick={goToLogin}>Go to Login</button>
        <div className='checkBoxes'>
            <div className='optionContainer'>
                <label htmlFor='option1'>Option1</label>
                <input id='option1' type='checkbox'></input>
            </div>
            <div className='optionContainer'>
                <label htmlFor='option2'>Option2</label>
                <input id='option2' type='checkbox'></input>
            </div>
            <div className='optionContainer'>
                <label htmlFor='option3'>Option3</label>
                <input id='option3' type='checkbox'></input>
            </div>
        </div>
        <button onClick={toggleFooter}>Toggle Footer</button>
        {footerVisible && footer}
    </div>
    );
}
export default Home;