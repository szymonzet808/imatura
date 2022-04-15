import React from 'react'
import './arkusze.css'

const Arkusz = ({ year, month, link_ark, link_odp }) => {
    return (
        <div className='arkusz'>
            <p className='arkusz-rok'>{year}</p>
            <p className='arkusz-miesiac'>{month}</p>
            <a className='btn-down crims' href={link_ark} target='__blank'><i class="fa-solid fa-download"></i> &nbsp;Arkusz</a>
            <a className='btn-down' href={link_odp} target='__blank'>Karta odpowiedzi</a>
        </div>
    )
}

export default Arkusz