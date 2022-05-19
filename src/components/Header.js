import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import { AppContext } from '../Context/AppContext'

import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {

    let navigate = useNavigate()

    const { search, setSearch, logged, setLogged } = useContext(AppContext)

    const [mobile, setMobile] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(false)

    const checkMobile = () => {
        if (window.innerWidth < 1210) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
    }
    const openMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            setSearch(document.getElementById('search-input').value);
            navigate('/arkusze', { 'paramPropKey': 'paramPropValue' })
        }
    };

    window.addEventListener('resize', () => { checkMobile(); setMobileMenu(false) })
    window.addEventListener('load', () => checkMobile())
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-logo'>
                    <i class="fa-solid fa-blanket-fire"></i><Link to='/' onClick={() => setMobileMenu(false)}><b>imatura<span style={{ color: "crimson" }}>_</span></b></Link>
                </div>
                <div className='header-search'>
                    <div>
                        <input type='text' id='search-input' placeholder='Wyszukaj arkusz' onKeyPress={handleKeypress} />
                        <button onClick={() => { setSearch(document.getElementById('search-input').value); navigate('/arkusze', { 'paramPropKey': 'paramPropValue' }) }}>Szukaj</button>
                    </div>

                </div>
                <div className='header-panel'>
                    {!mobile ? <>
                        <Link to='arkusze'>Arkusze</Link>
                        <Link to='gramatyka'>Gramatyka</Link>
                        <Link to='slowka'>Słówka</Link>
                        <Link to='transformacje'>Transformacje</Link>
                        {!logged ? <Link to='login' id='btn-log'>Zaloguj</Link> : <Link to='/' onClick={() => { setLogged(false) }} id='btn-log'>Wyloguj</Link>}
                    </>
                        :
                        <p>
                            <i className="fa-solid fa-bars menu-icon" onClick={openMenu}></i>
                        </p>
                    }
                </div>

            </div>

            {mobileMenu && <div className='mobile-menu'>
                <Link to='arkusze' onClick={() => setMobileMenu(false)}>Arkusze</Link>
                <Link to='gramatyka' onClick={() => setMobileMenu(false)}>Gramatyka</Link>
                <Link to='slowka' onClick={() => setMobileMenu(false)}>Słówka</Link>
                <Link to='transformacje' onClick={() => setMobileMenu(false)}>Transformacje</Link>
                {!logged ? <Link to='login' id='btn-log' onClick={() => { setMobileMenu(false) }}>Zaloguj</Link> : <Link to='/' onClick={() => { setLogged(false); setMobileMenu(false) }} id='btn-log'>Wyloguj</Link>}
            </div>}
        </div>
    )
}

export default Header