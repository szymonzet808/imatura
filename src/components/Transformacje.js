import React, { useState } from 'react'
import './transformacje.css'
import './arkusze.css'
import transArray from '../zadania'

const Transformacja = ({ eng, word, pre, after, ans }) => {

    const [userAns, setUserAns] = useState('')
    const [isRight, setIsRight] = useState(true)
    const [correct, setCorrect] = useState(false)

    const checkAns = () => {
        if (userAns.trim() != '' && userAns.trim() != ' ') {
            if (ans.trim() == userAns.trim()) {
                setIsRight(true)
                setCorrect(true)
            } else {
                setIsRight(false)
                setCorrect(false)
            }
        }

    }


    return (
        <div className={isRight ? 'transformacja' : 'transformacja red'}>
            <span className='trans-eng'>
                {eng}
            </span>
            <span className='trans-word'>
                {word} <span className={isRight ? 'ans' : 'ans visible'}>Answer: {ans}</span>
            </span>
            <div>
                <span className='trans-pre'>{pre}</span>
                <input type='text' className='trans-answer' onChange={(e) => {
                    setUserAns(e.target.value)
                    console.log(userAns)
                }} />
                <span className='trans-after'> {after} </span>
            </div>

            <button onClick={checkAns} className={correct ? 'green' : ''}>SPRAWDŹ</button>

        </div>
    )
}

const Transformacje = () => {
    return (
        <div className='main-screen transformacje'>
            {
                transArray.map((obj) => {
                    return (
                        <Transformacja eng={obj.eng} word={obj.word} pre={obj.pre} after={obj.after} ans={obj.ans} />
                    )
                }
                )
            }
        </div>
    )
}

export default Transformacje