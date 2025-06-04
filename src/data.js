import {MdElectricBolt, MdAutorenew, MdSecurity, MdHomeRepairService} from 'react-icons/md'
import {FaRobot} from 'react-icons/fa'
import {FaMicrochip, FaFireExtinguisher, FaSolarPanel, FaPlugCircleBolt} from 'react-icons/fa6'

import Avatar1 from './assets/images/avatar-1.jpg'
import Avatar2 from './assets/images/avatar-2.jpg'
import Avatar3 from './assets/images/avatar-3.jpg'

import Work1 from './assets/images/work1.webp'
import Work2 from './assets/images/work2.webp'
import Work3 from './assets/images/work3.webp'
import Work4 from './assets/images/work4.webp'
import Work5 from './assets/images/work5.webp'
import Work6 from './assets/images/work6.webp'
import Work7 from './assets/images/work7.webp'
import Work8 from './assets/images/work8.webp'


export const link = [
    {
        name : "Home",
        path : "/"
    },
    {
        name : "Services",
        path : "/services"
    },
    {
        name : "Products",
        path : "/products"
    },
    {
        name : "About",
        path : "/about"
    },
    {
        name : "Contact",
        path : "/contact"
    },
    {
        name : "Book",
        path : "/book"
    },

]

export const serviceList = [
    {
        id : 1,
        icon : FaMicrochip,
        title : "Industrial Panel Design",
        content : "Custom-designed industrial panels for all your control needs",
        items : ["Changeover Panel", "Starter Panels (DOL & Start-Delta", "Control Panels"]
    },
    {
        id : 2,
        icon : MdAutorenew,
        title : "Rewinding",
        content : "Professional rewinding services for motors and generators",
        items : ["Motor Rewinding", "Alternator Rewinding", "Generator Rewinding", "Transformer Rewinding"]
    },
    {
        id : 3,
        icon : FaRobot,
        title : "Automation",
        content : "Smart solutions for home and industrial automation",
        items : ["Smart Home Automation", "Fixed Automation", "Programmable Automation", "Flexible Automation"]
    },
    {
        id : 4,
        icon : FaFireExtinguisher,
        title : "Fire Alarm Systems",
        content : "Reliable fire detection and alarm solutions",
        items : ["Conventional Fire Alarm System", "Addressable Fire Alarm System"]
    },
    {
        id : 5,
        icon : MdElectricBolt,
        title : "Electrical Installation",
        content : "Complete electrical solutions for homes and businesses",
        items : ["Domestic Electrical System", "Industrial Electrical System", "Installation", "Maintenance", "Repairs"]
    },
    {
        id : 6,
        icon : FaSolarPanel,
        title : "Solar Services",
        content : "Sustainable energy solutions for modern needs",
        items : ["Solar Installation", "Solar Repair", "Solar Maintenance"]
    },
    {
        id : 7,
        icon : FaPlugCircleBolt,
        title : "Low RPM Alternator",
        content : "Specialized alternator solutions for various applications",
        items : ["Single Phase Alternator", "Single Phase Generator", "Three Phase Alternator", "Three Phase Generator"]
    },
    {
        id : 8,
        icon : MdHomeRepairService,
        title : "Home Appliance Repair",
        content : "Expert repair services for all your home appliances",
        items : ["Washing Machine", "Microwave", "Cooker", "Oven", "Dryer", "Vacuum Cleaner"]
    },
    {
        id : 9,
        icon : MdSecurity,
        title : "Security Systems",
        content : "Comprehensive security solutions for your peace of mind",
        items : ["Automatic Gate", "Automated Doorbell", "Automated Doors", "CCTV Installation", "Electric Fence Installation"]
    },

] 

export const testimonials = [
    {
        id : 1,
        image : Avatar1,
        name : "Michael Johnson",
        rating : 5,
        reply : "The team at NadiiTech installed our home automation system and we couldn't be happier. Professional, punctual, and the quality of work is outstanding."
    },
    {
        id : 2,
        image : Avatar2,
        name : "Sarah Williams",
        rating : 4.5,
        reply : "I had an electrical emergency and NadiiTech responded within an hour. The technician was knowledgeable and fixed the issue quickly. Highly recommend!"
    },
    {
        id : 3,
        image : Avatar3,
        name : "David Thompson",
        rating : 5,
        reply : "We've been using NadiiTech for all our business electrical needs for years. Their industrial panel designs are top-notch and their service is always reliable."


    },
    {
        id : 4,
        image : Avatar2,
        name : "Sarah Williams",
        rating : 4.5,
        reply : "I had an electrical emergency and NadiiTech responded within an hour. The technician was knowledgeable and fixed the issue quickly. Highly recommend!"
    },
]

export const workGalleryImg = [
    {
        id : 1,
        img : Work1
    },
    {
        id : 2,
        img : Work2
    },
    {
        id : 3,
        img : Work3
    },
    {
        id : 4,
        img : Work4
    },
    {
        id : 5,
        img : Work5
    },
    {
        id : 6,
        img : Work6
    },
    {
        id : 7,
        img : Work7
    },
    {
        id : 8,
        img : Work8
    },
]

export const teamMembers  = [
    {
        id: 1,
        img : Avatar1,
        name : "Nirozi Samuel ",
        position : "Founder & CEO",
        bio : "With over 15 years of experience in engineering and technology solutions."
    },
    {
        id: 2,
        img : Avatar2,
        name : "Osuolale Ifeoluwa ",
        position : "Chief Technical Officer",
        bio : "Specializes in innovative engineering solutions and automation systems."
    },
    {
        id: 3,
        img : Avatar3,
        name : "Akinbile Semilogo",
        position : "Head of Operations",
        bio : "Ensures seamless project execution and client satisfaction."
    }
]
export const faq = [
    {
        id: 1,
        question : "Can i reschedule a booking?",
        answer : "Yes, you can reschedule your booking by contacting our customer service team at least 1 hours before your scheduled appointment. There's no fee for rescheduling."
    },
    {
        id: 2,
        question : "How soon will i get response?",
        answer : "We typically respond to all booking requests within 1-2 business hours. For urgent matters, we prioritize response times and will contact you as soon as possible."
    },
    {
        id: 3,
        question : "Do you serve my area?",
        answer : "NADII Technology and Engineering serves most areas in Nigeria with a focus on major cities and surrounding areas. If you're unsure about service availability in your location, please contact us, and we'll let you know."
    },
    {
        id: 4,
        question : "What payment methods do you accept?",
        answer : "We accept various payment methods including bank transfers, credit/debit cards, and mobile money. Payment details will be provided after your booking is confirmed."
    },
    {
        id: 5,
        question : "Do you offer emergency services?",
        answer : "Yes, we offer emergency services for critical electrical issues. For emergencies, please call our hotline directly instead of using the booking form to ensure the fastest response."
    },
]