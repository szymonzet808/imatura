import React, { useContext } from 'react'
import './gramatyka.css'
import './arkusze.css'
import { AppContext } from '../Context/AppContext'
import { Link } from 'react-router-dom'

const Gramatyka = () => {

    const { logged } = useContext(AppContext)

    return (
        <div className='main-screen'>
            <div className='main-screen-container-grammar'>
                {!logged ? <h3 style={{ marginTop: '100px' }}><Link to='/login'><u>Zaloguj się</u></Link> by uzyskać dostęp</h3>
                    : <>
                        <h1>STRUKTURY GRAMATYCZNE</h1>
                        <p className='headline'>MUST HAVE DONE /  CAN’T HAVE DONE /  MIGHT HAVE DONE / SHOULD HAVE DONE</p>

                        <p className='note'><i class="fa-solid fa-arrow-right-long"></i>&nbsp;<u>MUST HAVE DONE</u> używamy, żeby wyrazić pewność, że jakieś zdarzenie miało miejsce (jesteśmy przekonani, że coś się wydarzyło)</p>
                        <p className='example'>I’m sure that man stole my wallet. – That man <b>MUST HAVE STOLEN</b> my wallet. – Tamten mężczyzna z pewnością ukradł mój portfel.</p>

                        <p className='note'><i class="fa-solid fa-arrow-right-long"></i>&nbsp;<u>CAN’T HAVE DONE</u> używamy, żeby wyrazić pewność, że jakieś zdarzenie nie miało miejsca w przeszłości (jesteśmy przekonani, że to się nie wydarzyło, na bank!)</p>
                        <p className='example'>I’m sure that he didn’t steal my wallet.  – He <b>CAN’T HAVE STOLEN</b> my wallet. – On z pewnością nie ukradł mojego portfela.</p>

                        <p className='note'><i class="fa-solid fa-arrow-right-long"></i>&nbsp;<u>MIGHT HAVE DONE /  MAY HAVE DONE</u> używamy, gdy nie jesteśmy pewni, czy jakieś zdarzenie miało miejsce w przeszłości (wydaje nam się, ze być może to się wydarzyło)</p>
                        <p className='example'>I’m not sure if he stole my wallet or not.  – <b>He MIGHT HAVE STOLEN</b> my wallet. – Być może on ukradł mój portfel.</p>

                        <p className='note'><i class="fa-solid fa-arrow-right-long"></i>&nbsp;<u>SHOULD HAVE DONE</u> używamy gdy sądzimy, że ktoś powinien był coś zrobić w przeszłości, a tego nie zrobił</p>
                        <p className='example'>I’ve had a toothache for a week.  – You <b>SHOULD HAVE GONE</b> to the dentist last week. – Powinnaś była pójść do dentysty już w zeszłym tygodniu.</p>

                        <p className='headline'>ALTHOUGH, DESPITE, IN SPITE OF</p>

                        <p className='note'><i class="fa-solid fa-arrow-right-long"></i>&nbsp;<u>Although</u>  znaczy – mimo że i używamy tego spójnika w połączeniu z podmiotem (np. I, you, she, it) i orzeczeniem:</p>
                        <p className='example'>Although I was tired, I went to the gym. –  Mimo że byłam zmęczona, poszłam na siłownię.</p>
                        <p className='example'>We went for a walk although it was raining. – Poszliśmy na spacer mimo że padało.</p>
                        <p className='example'>Zamiast although możesz również użyć – <u>even though</u>.</p>

                        <p className='note'><i class="fa-solid fa-arrow-right-long"></i>&nbsp;<u>Despite (lub jego zamiennik – in spite of)</u> znaczy pomimo czegoś i łączymy go z rzeczownikiem lub czasownikiem z końcówką –ing (tzw. gerund – np. being, doing, going).</p>
                        <p className='example'>Despite the rain, we went for a walk. – Pomimo deszczu poszliśmy na spacer. (despite + rzeczownik)</p>
                        <p className='example'>I decided to work on this project in spite of being tired. =  Postanowiłam posiedzieć nad tym projektem pomimo bycia zmęczoną. (in spite of + gerund)</p>

                        <p className='headline'>I HAVE BEEN DOING sth FOR/ SINCE</p>
                        <p className='note'>Czas Present Perfect Continuous to kolejny pewniak na maturze. Używamy go, żeby mówić m.in. o tym, jak długo wykonujemy już daną czynność.</p>
                        <p className='example'>I have been learning English for 5 years. –  Uczę się angielskiego od 5 lat.</p>
                        <p className='example'>My mum has been sleeping for 10 hours. –  Moja mama śpi już od 10 godzin.</p>
                        <br />

                    </>
                }
            </div>
        </div>
    )
}

export default Gramatyka