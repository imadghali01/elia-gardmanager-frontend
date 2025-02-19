import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import IphoneContainer from "../components/IphoneContainer";
import ShiftCard from "../components/ShiftCard";


export default function ShiftCardAdmin() {
return (
    <IphoneContainer>
      <ShiftCard
      />
    </IphoneContainer>
  );
}
