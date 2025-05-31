import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import {Link, NavLink} from 'react-router-dom'
import {FaBars, FaRegUser} from 'react-icons/fa'
import {MdOutlineShoppingCart, MdClose} from 'react-icons/md'
import {link} from '../data'

const NavBar = () => {
    const [nav, setNav] = useState(false)
  return (
    <nav className='flex bg-white text-center items-center sticky top-0 z-10 justify-between border-b-4 border-ash px-[30px] py-[30px] md:px-[50px] lg:px-[70px] lg:py-[20px]'>
        <button className='block lg:hidden cursor-pointer' onClick={()=>setNav(true)}>
            <FaBars fill='' size={25}/>
        </button>

        {/* Logo */}
        <Link to={"/"} className=' grow grid justify-center lg:grow-0'><img src={Logo} alt='Nadii-Logo' className='w-[150px] md:w-[250px]'/> </Link>

        {/* modal */}
        {nav &&
        <div className='bg-black/85 fixed w-full h-screen top-0 z-10 left-0'></div> }

        {/* Navlinks */}
        <div className={`flex pl-10 pt-20 bg-primary duration-700 z-20 fixed top-0  w-[80%] h-screen lg:static lg:h-fit lg:pl-0 lg:w-fit lg:grow lg:justify-center lg:bg-transparent lg:pt-0 ${nav ? "left-0" : "left-[-80%]"}`}>
           {/* Close menuu */}
            <button className='block lg:hidden absolute top-3 right-5 cursor-pointer' onClick={()=>setNav(false)}>
                <MdClose fill='white' size={40}/>
            </button>
            <ul className='flex flex-col gap-7 lg:flex-row text-white lg:text-black text-[20px] text-left lg:text-center'>
                {
                    link.map(({name, path}, index) => {
                        return (
                            <li key={index} className='hover:text-primary'><NavLink to={path} onClick={() => setNav(false)} className={({isActive}) => isActive ? 'lg:text-primary' : ""}>{name}</NavLink></li>
                        )
                    })
                }
            </ul>
        </div>


        {/* cart and account */}
        <div className='flex gap-5 md:gap-x-10 justify-self-center '>
            <Link to={"/account"} className=''><FaRegUser fill='#F5871F'size={25} /></Link>
            <Link to={"/cart"} className='relative'><MdOutlineShoppingCart fill='#F5871F'  size={25}/>
             <span className='absolute top-[-15px] bg-secondary p-1.5 rounded-full '>0</span>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar