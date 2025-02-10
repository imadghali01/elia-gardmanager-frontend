import { useState } from "react";
import "./Offers.css";


const Offers = () => {
    const [availableSwitches, setAvailableSwitches] = useState([]);
    const [pendingSwitches, setPendingSwitches] = useState([]);
}


return(
    <div calssName="Offers-container">
      <h2>Status : Available</h2>
    <div className="availableSwitches">

      </div>
      <div>
        <h2>Status : await</h2>
      </div>
      
    </div>
)