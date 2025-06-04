import React from 'react'
import Heading from '../Heading'
import {faq} from '../../data'
import Acordion from '../Acordion'

const BookingFaq = () => {

  return (
    <section className='bg-ash'>
        <Heading title={"Frequently Asked Questions"}
         body={"Find answers to common questions about our booking process"}
        />

        <div className='mt-7 lg:w-3/4 mx-auto grid gap-5'>
            {
                faq.map(({id, question, answer}) => {
                    return (
                        <Acordion key={id} className='bg-white rounded-lg shadow' question={question} answer={answer}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default BookingFaq