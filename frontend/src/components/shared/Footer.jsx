import { Linkedin, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Award1 from "../../assets/award1.png";
import Award2 from "../../assets/award2.png";
import Award3 from "../../assets/award3.png";
import Award4 from "../../assets/award4.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">            
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Cogent Solutions™</h2>
                    <p className="text-gray-300 mb-8 max-w-md">
                        Through our conferences we transform your business challenges into opportunities. 
                        Our clients and customers are leading government entities and the fortune 500 companies.
                    </p>
                    
                    <h3 className="text-2xl font-bold mb-6">Awards</h3>
                    <div className="flex flex-wrap gap-4">
                        <div className="h-24 w-24">
                            <img src={Award1} alt="Best Workplaces Award" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-24 w-24">
                            <img src={Award2} alt="Best Workplaces for Millennials Award" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-24 w-24">
                            <img src={Award3} alt="Best Workplaces in Marketing Award" className="h-full w-full object-contain" />
                        </div>
                        <div className="h-24 w-24">
                            <img src={Award4} alt="Great Place to Work Certified Award" className="h-full w-full object-contain" />
                        </div>
                    </div>
                </div>
                            
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Our office</h2>
                    
                    <div className="space-y-6">              
                        <div className="flex">
                            <MapPin className="h-6 w-6 text-gray-400 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-gray-300">Middle East & Africa HQ</p>
                                <p className="text-gray-400">Office No: 209, The Metropolis Tower</p>
                                <p className="text-gray-400">Business Bay, Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                                        
                        <div className="flex">
                            <MapPin className="h-6 w-6 text-gray-400 mr-4 flex-shrink-0 mt-1" />
                            <div>
                            <p className="text-gray-300">Asia Pacific HQ</p>
                            <p className="text-gray-400">7th floor Green Lanka Tower, Colombo</p>
                            <p className="text-gray-400">Sri Lanka</p>
                            </div>
                        </div>
                                        
                        <div className="flex">
                            <MapPin className="h-6 w-6 text-gray-400 mr-4 flex-shrink-0 mt-1" />
                            <div>
                            <p className="text-gray-300">Saudi Arabia HQ</p>
                            <p className="text-gray-400">Riyadh, Saudi Arabia</p>
                            </div>
                        </div>
                                        
                        <div className="flex items-center">
                            <Phone className="h-6 w-6 text-gray-400 mr-4 flex-shrink-0" />
                            <a href="tel:+971505718867" className="text-gray-300 hover:text-white transition-colors">
                            +971 50 5718867
                            </a>
                        </div>
                                        
                        <div className="flex items-center">
                            <Mail className="h-6 w-6 text-gray-400 mr-4 flex-shrink-0" />
                            <a href="mailto:partnerships@cogentsolutions.ae" className="text-gray-300 hover:text-white transition-colors">
                            partnerships@cogentsolutions.ae
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                    
            <hr className="border-gray-800 mb-8" />
                    
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-6 md:mb-0">
                    © 2025 Cogent Solutions Event Management LLC. All Right Reserved
                </p>
                
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;