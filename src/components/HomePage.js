import React from 'react'
import './homepage.css'
import bigben from '../media/undraw1.svg'
const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='homepage-left-panel'>
                <h1 style={{ color: 'crimson', fontWeight: 800 }}>imatura to <i class="fa-solid fa-question"></i></h1>
                <p>w pełni darmowa strona przygotowująca do egzaminu maturalnego z języka angielskiego na poziomie <u>rozszerzonym</u></p>
                <br></br><p>Zapisz się na newsletter!</p>
                <input className='input-newsletter' type='email' placeholder='jan.kowalski@gmail.com'></input>
                <button className='btn-newsletter'>Zapisz się</button>
            </div>
            <div className='homepage-right-panel'>
                <img src={bigben} id='img-bigben'></img>
            </div>
        </div>
    )
}

export default HomePage