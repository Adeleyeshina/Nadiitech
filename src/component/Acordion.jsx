import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Acordion = ({className, question, answer}) => {
    const [isFaq, setFaq] = useState(false)
  return (
    <aside>
        <details className={`${className} bg-white`}>
            <summary onClick={() =>setFaq(prev => !prev)} className='flex p-5 text-lg font-semibold justify-between'>{question} 
                <span>
                    {
                        isFaq ? <IoIosArrowUp size={25} fill='#F5871F'/> : <IoIosArrowDown size={25} fill='#F5871F'/>
                    }
                </span>
            </summary>
            <div className='px-6 pt-2 pb-5 text-lg'>{answer}</div>
        </details>
    </aside>
  )
}

export default Acordion