import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import './loginpage.css'



const LoginPage = () => {

    let navigate = useNavigate()
    const { setLogged } = useContext(AppContext)

    const LogIn = () => {
        let usr = document.getElementById('log-input').value
        let pass = document.getElementById('pass-input').value

        if (usr == 'admin' || pass == 'admin') {
            setLogged(true)
            navigate('/gramatyka')
        }
    }
    return (
        <div className='login-page'>
            <h2>LOGOWANIE</h2>
            <div>
                <i class="fa-solid fa-user"></i>
                <input type='text' className='log-input' id='log-input' placeholder='admin' />
            </div>
            <div>
                <i class="fa-solid fa-key"></i>
                <input type='password' className='log-input' id='pass-input' placeholder='admin' />
            </div>
            <div style={{ marginTop: '10px' }}>
                <input type='checkbox' />&nbsp;
                <span style={{ fontWeight: 400, margin: '3px', fontSize: '14px' }}>Zapamiętaj mnie</span>
            </div>
            <button className='btn-log-google' onClick={LogIn}>
                Zaloguj
            </button>
        </div>
    )
}

export default LoginPage