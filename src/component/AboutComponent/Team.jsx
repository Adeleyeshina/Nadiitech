import React from 'react'
import Heading from '../Heading'
import {teamMembers } from "../../data"

const Team = () => {
  return (
    <section className='bg-ash'>
        <div>
            <Heading title={"Meet the Team"}
             body={"The brilliant minds behind NADII's innovative solutions."}
            />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 gap-y-2'>
                {
                    teamMembers.map(({id, img, name, position , bio}) => {
                        return (
                            <div key={id} className='mt-7 rounded-xl shadow-xl group overflow-hidden pb-2'>
                               <img src={img} alt={name} className='block rounded-t-xl group-hover:scale-105 duration-300'/>
                                <div className='p-5 z-20'>
                                    <h3 className='text-2xl font-bold '>{name}</h3>
                                    <p className='text-lg text-primary font-semibold my-1'>{position}</p>
                                    <p className='mt-2 font-semibold'>{bio}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Team