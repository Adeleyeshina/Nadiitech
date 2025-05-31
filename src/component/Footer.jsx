import React from 'react'
import Logo from '../assets/images/Logo.png'
import {Link} from 'react-router-dom'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {serviceList} from '../data'

const Footer = () => {
  const year = new Date().getFullYear()
  const phoneNo = import.meta.env.VITE_PHONE_NO
  return (
    <footer className='bg-black text-gray-400'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10 pb-7'>
        <div className='grid gap-2'>
          <img src={Logo} alt="nadii" className='w-[200px] mb-3'/>
          <p>Technology & Engineering Nig — your trusted partner for electrical, automation, and smart systems.</p>
          {/* Socials */}
          <div className="flex gap-3">
            <Link to={"https://facebook.com"} target='_blank'><FaFacebookF /></Link>
            <Link to={"https://x.com/"} target='_blank'><FaXTwitter/></Link>
            <Link to={"https://www.instagram.com/"} target='_blank'><FaInstagram /></Link>
            <Link to={"https://www.linkedin.com/"} target='_blank'><FaLinkedinIn /></Link>
          </div>
        </div>
        {/* Services */}
        <div>
          <h4 className='text-white text-[20px] mb-3'>Services</h4>
          <ul className='grid gap-2'>
            {
              serviceList.slice(0, 5).map(({id, title}) =>{
                return <li key={id}><Link to={"/services"}>{title}</Link></li>
              })
          }
          </ul>
        </div>
        {/* More services */}
        <div>
          <h4 className='text-white text-[20px] mb-3'>More Services</h4>
          <ul className='grid gap-2'>
            {
              serviceList.slice(5, ).map(({id, title}) =>{
                return <li key={id}><Link to={"/services"}>{title}</Link></li>
              })
          }
          </ul>
        </div>
        {/* Contact us */}
        <div>
          <h4 className='text-white text-[20px] mb-3'>Contact Us</h4>
          <div className='grid gap-2'>
            <p className='flex gap-3 items-center'><FaMapMarkerAlt fill='#F5871F'/>123 Engineering Avenue, Ibadans, Nigeria</p>
            <p className='flex gap-3 items-center'><FaPhoneAlt fill='#F5871F'/>{phoneNo}</p>
            <p className='flex gap-3 items-center'><FaEnvelope fill='#F5871F'/>info@nadiitech.com</p>
          </div>
        </div>
      </div>

      <div className='text-center border-t border-gray-400 pt-7'>
        <p>&copy; {year} NADII Technology and Engineering Nig. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer