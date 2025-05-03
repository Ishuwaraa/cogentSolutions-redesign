const SpeakerCard = ({ image, name, title, company }) => {
    return ( 
        <div className="bg-black rounded overflow-hidden">
            <div className="h-64 overflow-hidden border-l-4 border-blue-700">
                <img src={image} alt={name} className="w-full h-full object-cover object-center"/>
            </div>
            <div className="p-4 text-center bg-blue-700">
                <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
                <p className="text-white text-sm">{title}</p>
                <p className="text-white text-sm">{company}</p>
            </div>
        </div>
    );
}
 
export default SpeakerCard;