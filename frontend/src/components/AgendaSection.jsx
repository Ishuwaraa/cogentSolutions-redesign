import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const agendaItems = [
    {
        time: "9:30 AM",
        title: "Registration & Welcome Coffee",
        // highlight: true,
    },
    {
        time: "10:00 AM",
        title: "Opening Remarks",
        description:
        "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
    },
    {
        time: "10:10 AM",
        title: "Keynote session: Digital Transformation in a Gen AI World",
        description:
        "Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking",
    },
    {
        time: "10:30 AM",
        title: "Decoding the Future - Transformation: The Opportunity & Time is Now",
        description:
        "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra",
    },
    {
        time: "11:00 AM",
        title: "Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
        description:
        'Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. “Incolease’’.Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR',
    },
    {
        time: "11:30 AM",
        title: "Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead",
        description:
        "Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking Heba Yehia, Head of Digital Products, Arab African International Bank; Ismail Ali, Co-Founder and CEO of CARITech Mohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt",
    },
    {
        time: "12:00 PM",
        title: "Coffee Break & Networking",
    },
    {
        time: "12:30 PM",
        title: "Panel Discussion: Cost to Serve: Deliver Customer Delight",
        description:
        "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking Shehab Moustafa, Country Center of Excellence Director, Money Fellows; Matthew Hughes, Head of FS&I, International Markets, Atos Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.",
    },
    {
        time: "01:00 PM",
        title: 'The Essential Elements: What do you need to be "all things to all people"?',
        description:
        "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking",
    },
    {
        time: "01:30 PM",
        title: "Making the case for change: The Question is How",
        description:
        "Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking",
    },
    {
        time: "01:50 PM",
        title: "Closing Remarks",
        description:
        "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
    },
    {
        time: "02:00 PM",
        title: "Lunch",
    },
];

export default function AgendaTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="bg-black text-white py-20 px-4 md:px-20" id="agenda">
            <h2 className="text-4xl md:text-5xl font-semibold mb-16">Agenda</h2>

            <div className="flex justify-center">
                <div
                    ref={containerRef}
                    className="relative h-[600px] overflow-y-auto scrollbar-hide max-w-3xl w-full"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    <style jsx="true">{`
                        div::-webkit-scrollbar {
                        display: none;
                        }
                    `}</style>

                    <motion.div
                        className="absolute left-[110px] md:left-[130px] top-0 w-px bg-gradient-to-b from-blue-500 to-blue-700 origin-top"
                        style={{
                        height: lineHeight,
                        zIndex: 10,
                        }}
                    />

                    <ul className="space-y-16 relative pb-8">
                        {agendaItems.map((item, index) => (
                        <li key={index} className="relative flex">
                            <div className="min-w-[90px] md:min-w-[110px] text-right pr-6 relative">
                            <span
                                className={`text-sm md:text-base font-medium ${
                                item.highlight ? "text-blue-500" : "text-gray-400"
                                }`}
                            >
                                {item.time}
                            </span>
                            <div className="absolute right-0 top-1 w-3 h-3 rounded-full bg-white border-2 border-gray-600 translate-x-1/2 z-20" />
                            </div>
                            <div className="pl-6">
                            <p
                                className={`text-base md:text-lg font-semibold ${
                                item.highlight ? "text-white" : "text-gray-300"
                                }`}
                            >
                                {item.title}
                            </p>
                            {item.description && (
                                <p className="text-sm md:text-base text-gray-500 mt-1 max-w-md">
                                {item.description}
                                </p>
                            )}
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
