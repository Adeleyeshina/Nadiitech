import React from 'react'
import PagesHeader from '../component/PagesHeader'
import ContactBg from "../assets/images/contact-bg.jpeg"
import { FaWhatsapp } from 'react-icons/fa'
import ContactInfo from '../component/ContactComponent/ContactInfo'


const Contact = () => {
   const phone = import.meta.env.VITE_WHATSAPP_NO
   const message = import.meta.env.VITE_WHATSAPP_MESSAGE
  return (
    <div>
      <PagesHeader img={ContactBg} page={"Contact"} title={"Let's Talk"} 
      body={"We're here to help with all your electrical, automation, and engineering needs."} 
      ctaText={"WhatsApp Us"} icon={<FaWhatsapp size={25}/>} ctaNav={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} className={"contact-header"}
      />
      <ContactInfo />
    </div>
  )
}

export default Contact