import Navbar from "../components/shared/Navbar";
import BgImage from "../assets/bg-image.png";
import SpeakerCard from "../components/SpeakerCard";
import GroupPhoto from "../assets/group.png";
import AgendaTimeline from "../components/AgendaSection";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/shared/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Person1 from "../assets/p1.png";
import Person2 from "../assets/p2.png";
import Person3 from "../assets/p3.png";
import Person4 from "../assets/p4.png";
import Person5 from "../assets/p5.png";
import Person6 from "../assets/p6.png";
import Person7 from "../assets/p7.png";
import Person8 from "../assets/p8.png";
import Person9 from "../assets/p9.png";
import Person10 from "../assets/p10.png";
import Person11 from "../assets/p11.png";

const speakers = [
    {
        image: Person1,
        name:"Mr. Mohamed Elazzazy",
        title:"Head of IT Governance and Change Management",
        company:"AI-Baraka Bank Egypt"
    },
    {
        image: Person2,
        name:"Mr. Shehab Moustafa",
        title:"Country Center of Excellence Director",
        company:"Money Fellows"
    },
    {
        image: Person3,
        name:"Mr. Marwan Abouzeid",
        title:"Principal Solutions Consultant & Customer Value Lead, MEA, & APAC",
        company:"Finastra"
    },
    {
        image: Person4,
        name:"Mr. Karim El Mourabet",
        title:"Solution Consulting Director - MEA",
        company:"Finastra"
    },
    {
        image: Person5,
        name:"Ms. Siobhan Byron",
        title:"Executive Vice President, Universal Banking",
        company:"Finastra"
    },
    {
        image: Person6,
        name:"Mr. Narendra Mistry",
        title:"Chief Product and Technology Officer, Universal Banking",
        company:"Finastra"
    },
    {
        image: Person7,
        name:"Mr. Ahmed Hamdy Bahey El Din",
        title:"Head of Information Technology",
        company:"Incolease"
    },
    {
        image: Person8,
        name:"Nr, Enad Shawky Habib Hanna",
        title:"Chief Data and Analytics Officer",
        company:"Banque Misr"
    },
    {
        image: Person9,
        name:"Ms. Heba Yehia",
        title:"Head of Digital Products",
        company:"Arab African International Bank"
    },
    {
        image: Person10,
        name:"Mr. Hamid Nirouzad",
        title:"Managing Director - Africa",
        company:"Finastra Universal"
    },
    {
        image: Person11,
        name:"Mr. Rudy Kawmi",
        title:"Manging Director - Middle East, Africa & Asia-Pacific",
        company:"Finastra Universal Banking"
    },
]

const Home = () => {
    const overviewRef = useRef(null);
        
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return ( 
        <>
        <div className="relative min-h-screen flex items-center justify-center bg-blue-900 overflow-hidden">
            
            <div className="absolute inset-0 z-0">
                <img src={BgImage} alt="Background" className="w-full h-full object-cover" />
            </div>
                        
            <Navbar />
                        
            <div className="z-10 text-center px-4">
                <p className="text-gray-300 mb-2">Organized by</p>
                                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 from-0% to-blue-600 to-91%">
                        FINASTRA
                    </span>
                </h2>
                                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Reimagine Banking</h1>
                                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-12">Adapt. Evolve. Thrive.</h2>
                                
                <div className="text-gray-300 mb-10">
                    <p className="mb-1">Date: 9th April 2025</p>
                    <p className="mb-1">Time: 9:30 AM - 2:00 PM GMT+2</p>
                    <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
                </div>
                                
                <button className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-900 transition-colors inline-flex items-center"
                    onClick={() => window.location.href = '#about'}
                >
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div className="bg-black text-white">

            <motion.section 
                id="event-overview" 
                className="py-16 px-4 md:px-16 max-w-7xl mx-auto"
                ref={overviewRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Event Overview</h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <p className="mb-4">
                            Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." 
                            This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
                        </p>
                        <p className="mb-4">
                            Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. 
                            You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, 
                            persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.
                        </p>
                        <p className="mb-4">
                            Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to 
                            leverage the latest technologies and capitalize on emerging opportunities. 
                            This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.
                        </p>
                        <p>
                            Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. 
                            Register today and secure your place at this must-attend event!
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <img src={GroupPhoto} alt="Banking conference discussion" className="w-full rounded shadow-lg"/>
                    </div>
                </div>
            </motion.section>                    
            
            <section id="speakers" className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Speakers</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    <div className="col-span-full sm:col-span-2 lg:col-span-4 flex flex-wrap justify-center gap-6">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="w-full sm:w-auto max-w-xs">
                                <SpeakerCard 
                                    image={speaker.image}
                                    name={speaker.name}
                                    title={speaker.title}
                                    company={speaker.company}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AgendaTimeline />

            <section id="about" className="py-16 px-4 md:px-16 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Finastra</h2>
                    
                    <div className="text-gray-300 leading-relaxed">
                        <p className="mb-6">
                            Finastra is a global provider of financial services software applications across Lending, 
                            Payments, Treasury & Capital Markets, and Universal Banking (retail and digital Banking). 
                            Committed to unlocking the potential of people, businesses and communities 
                            everywhere, its vision is to accelerate the future of Open Finance, through technology and 
                            collaboration, and its pioneering approach is why it is trusted by ~8,100 financial 
                            institutions, including 45 of the world's top 50 banks.
                        </p>
                        
                        <p>For more information, visit <a href="https://www.finastra.com" className="text-blue-400 hover:underline">www.finastra.com</a></p>
                    </div>
                </div>
            </section>

            <section id="register" className="py-16 px-4 md:px-16 bg-primary text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-2/5 mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Now</h2>
                            <p className="text-xl mb-4">Join us for an unforgettable experience!</p>
                            <p className="text-gray-200">
                                Secure your spot at this exclusive banking event where industry leaders and innovators 
                                will share insights on the latest trends, challenges, and opportunities in the 
                                financial sector.
                            </p>
                        </div>
                        
                        <div className="w-full md:w-1/2">
                            <RegistrationForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Footer />
        </>
    );
}
 
export default Home;