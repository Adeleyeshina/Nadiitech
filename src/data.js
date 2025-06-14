import {MdElectricBolt, MdAutorenew, MdSecurity, MdHomeRepairService, MdViewList} from 'react-icons/md'
import {FaCalendarCheck, FaHistory, FaRobot} from 'react-icons/fa'
import {FaMicrochip, FaFireExtinguisher, FaSolarPanel, FaPlugCircleBolt} from 'react-icons/fa6'

import test1 from './assets/images/test-1.webp'
import test2 from './assets/images/test-2.webp'
import test3 from './assets/images/test-3.webp'
import test4 from './assets/images/test-4.webp'
import test5 from './assets/images/test-5.webp'
import test6 from './assets/images/test-6.webp'
import test7 from './assets/images/test-7.webp'

import team1 from './assets/images/team-1.webp'
import team2 from './assets/images/team-2.webp'
import team3 from './assets/images/team-3.webp'


import Work1 from './assets/images/work1.webp'
import Work2 from './assets/images/work2.webp'
import Work3 from './assets/images/work3.webp'
import Work4 from './assets/images/work4.webp'
import Work5 from './assets/images/work5.webp'
import Work6 from './assets/images/work6.webp'
import Work7 from './assets/images/work7.webp'
import Work8 from './assets/images/work8.webp'
import { AiOutlinePlusSquare } from 'react-icons/ai'


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
    id: 1,
    image: test1,
    name: "Engr Felix",
    rating: 5,
    reply: "The team at NadiiTech installed our home automation system and we couldn't be happier. Professional, punctual, and the quality of work is outstanding."
  },
  {
    id: 2,
    image: test2,
    name: "Mrs Anuoluwapo",
    rating: 4.5,
    reply: "I had an electrical emergency and NadiiTech responded within an hour. The technician was knowledgeable and fixed the issue quickly. Highly recommend!"
  },
  {
    id: 3,
    image: test3,
    name: "Mrs Jatto Ifelola",
    rating: 5,
    reply: "We've been using NadiiTech for all our business electrical needs for years. Their industrial panel designs are top-notch and their service is always reliable."
  },
  {
    id: 4,
    image: test4,
    name: "Temi",
    rating: 4.5,
    reply: "They installed security lighting around our property. The work was clean and the system works flawlessly. Would use them again!"
  },
  {
    id: 5,
    image: test5,
    name: "Mrs Yemisi",
    rating: 5,
    reply: "NadiiTech handled our office wiring project excellently. Everything was completed ahead of schedule with great attention to detail."
  },
  {
    id: 6,
    image: test6,
    name: "Damilola",
    rating: 4.5,
    reply: "Great service! The technician explained everything clearly and ensured our backup generator was set up properly."
  },
  {
    id: 7,
    image: test7,
    name: "Elizabeth",
    rating: 5,
    reply: "I’m very impressed with their customer service and technical know-how. Highly recommend for residential electrical needs."
  },
];


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
        img : team1,
        name : "Engr. Nirozi Samuel ",
        position : "Founder & CEO",
        bio : "Leads the comapany's vision and strategy with over 7 years of experience in engineering and technology solutions."
    },
    {
        id: 2,
        img : team2,
        name : "Engr. Emmanuel ",
        position : "Admin (Technical Supervisor)",
        bio : "Oversees technical operations and ensures efficient administrative workflows witin the engineering team."
    },
    {
        id: 3,
        img : team3,
        name : "Doris Kehinde",
        position : "Secretary",
        bio : "Manages documentation, schedules, and internal communications to support seamless organization operations,"
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

export const  adminRoute = [
    {path : 'products', name : "All Products", icon : MdViewList },
    {path : 'createproducts', name : "Create Products", icon : AiOutlinePlusSquare },
    {path : 'orders', name : "Order History", icon : FaHistory },
    {path : 'bookings', name : "Booking History", icon : FaCalendarCheck }
]