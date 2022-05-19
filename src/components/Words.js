import React from 'react'
import './words.css'

const Word = ({ eng, pol, exmpl, exmplPol }) => {
    return (
        <div className='word'>
            <div className='word-top'>
                <span className='eng'>{eng}</span>
                <span className='pol'>{pol}</span>
            </div>
            <div className='word-bottom'>
                <span className='exmpl'>{exmpl}</span>
                <span className='exmpl-pol'>{exmplPol}</span>
            </div>
        </div>
    )

}

const Words = () => {
    return (
        <div className='words'>
            <Word eng='As regards' pol='co się tyczy' exmpl='As regards grants, simplification of the rules is needed.' exmplPol='Co się tyczy dotacji, należy uprościć przepisy.' />
            <Word eng='Besides' pol='oprócz tego' exmpl='Besides, everyone hates them anyway.' exmplPol='Poza tym, wszyscy i tak ich nienawidzą.' />
            <Word eng='Further' pol='co więcej' exmpl='Further, she has to reconsider her claims.' exmplPol='Co więcej, powinna rozpatrzyć swoje żądania.' />
            <Word eng='Accordingly' pol='w związku z tym' exmpl='He won the election and accordingly he became a chairman. ' exmplPol=' Wygrał wybory i dlatego stał się prezesem.' />
            <Word eng='Because' pol='ponieważ' exmpl='I argue with you because you are completely wrong.' exmplPol='Kłócę się z tobą, ponieważ jest całkowicie w błędzie.' />
            <Word eng='Thereby' pol='tym samym' exmpl='He broke all the rules and thereby, he was expelled.' exmplPol='Złamał wszystkie zasady, tym samym został wydalony.' />
            <Word eng='In consequence' pol='w konsekwencji' exmpl='He did it and in consequence he was on time' exmplPol='Zrobił to i w konsekwencji był na czas.' />
            <Word eng='Hence' pol='stąd, w związku z tym' exmpl='He had credentials and hence they employed him.' exmplPol='Miał kwalifikacje i dlatego go zatrudnili.' />

        </div>
    )
}

export default Words