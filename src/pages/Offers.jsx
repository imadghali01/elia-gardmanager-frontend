import { useState , useEffect ,createElement  } from "react";
import "./Offers.css";



const Offers = () => {
    const [availableSwitches, setAvailableSwitches] = useState([]);
    const [pendingSwitches, setPendingSwitches] = useState([]);

    useEffect(() => {
      setAvailableSwitches([
          { id: 1, userId: "ThibautH.", date: "03/01/2025 6AM - 6PM", mail:"aaa@aaahotmaol.be", phone:'7426 226 523'}
      ]);
    },
      []);
      
      let offresComponent = null; // Par défaut, on ne crée rien


    if (availableSwitches.length > 0){
      function offres (offre){
        return createElement(
          'div',
          {className:'offre'},
          createElement("h3", {}, "Available for a switch"),
          createElement('p',{className:'userName text-left '},offre.userId),
          createElement('p',{className:'mail'},'Mail'+offre.mail+' \u00A0\u00A0'+'Phone:'+offre.phone ),

        );
      }
      offresComponent = availableSwitches.map((offre) => offres(offre));
    }
    

  return (
    
    <div className="min-h-screen bg-gray-300 flex flex-col items-center ">
    <h2 className="bg-white w-[350px] text-center text-2xl py-2 border ">Status : Available</h2>
    <div className="bg-white w-[350px] mx-auto text-center p-2 shadow-lg border">
      {offresComponent}
    </div>
  
    <h2 className="bg-white w-[350px] text-center text-2xl py-2  border">Status : Waiting</h2>
    <div className="bg-white w-[350px] mx-auto text-center p-4 shadow-lg border">
    </div>
  </div>
  
  )
}

export default Offers;