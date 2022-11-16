import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';


function Main(props) {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <h2>Create a short URL</h2>
            <button  class="btn" onClick={()=>navigate('/createLink')}>Start</button>
        </div>
    );
}

export default Main;