import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Arkusz from './Arkusz'
import './arkusze.css'
import linki from '../linki.js'

const Arkusze = () => {

    const { search } = useContext(AppContext)

    return (
        <div className='main-screen'>
            <div className='main-screen-container'>
                {linki.map((link, index) => {
                    console.log(search, link.year)
                    if (parseInt(search) === link.year) {
                        return <Arkusz key={index}
                            year={link.year}
                            month={link.month}
                            link_ark={link.link_ark}
                            link_odp={link.link_odp}
                        />
                    }
                    if (search == ' ' || search == '' || search < 2015 || search > 2022) {
                        return <Arkusz key={index}
                            year={link.year}
                            month={link.month}
                            link_ark={link.link_ark}
                            link_odp={link.link_odp}
                        />
                    }
                })}
            </div>

        </div>
    )
}

export default Arkusze