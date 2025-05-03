const SpeakerCard = ({ image, name, title, company }) => {
    return ( 
        <div className="bg-black rounded overflow-hidden w-72 h-96 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="h-64 overflow-hidden border-l-4 border-blue-700">
                <img src={image} alt={name} className="w-full h-full object-cover object-center"/>
            </div>
            <div className="p-4 text-center bg-blue-700 h-32">
                <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
                <p className="text-gray-300 text-sm">{title}</p>
                <p className="text-gray-300 text-sm">{company}</p>
            </div>
        </div>
    );
}
 
export default SpeakerCard;