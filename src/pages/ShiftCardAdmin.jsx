import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ShiftCard from "../components/ShiftCard";
import IphoneContainer from "../components/IphoneContainer";

export default function ShiftCardAdmin() {
  // Simulation de données pour chaque statut
  const availableShifts = [
    {
      name: "ThibautH.",
      score: -2,
      date: "03/01/2025",
      time: "6AM → 6PM",
      email: "ThibautHass@gmail.com",
      phone: "3195 864 792",
      isAvailable: true,
    },
    {
      name: "LouisP.",
      score: 4,
      date: "05/01/2025",
      time: "8AM → 10PM",
      email: "LouisPest@hotmail.be",
      phone: "3486 824 937",
      isAvailable: true,
    },
  ];

  const pendingRequests = [
    {
      name: "JeffreyM.",
      score: 5,
      date: "02/01/2025",
      time: "12AM → 6PM",
      reason: "Other",
      email: "Jeffreymartin@hotmail.be",
      phone: "4876 057 657",
      isAvailable: false,
    },
    {
      name: "MathieuB.",
      score: -8,
      date: "07/01/2025",
      time: "12AM → 6PM",
      reason: "Vacation",
      email: "MathieuBart@hotmail.com",
      phone: "9856 275 981",
      isAvailable: false,
    },
  ];

  const finishedShifts = [
    {
      name: "PiterO.",
      score: 9,
      date: "05/01/2025",
      time: "8AM → 10PM",
      previousHolder: "AxelC.",
      email: "LouisPest@hotmail.be",
      phone: "3486 824 937",
      isAvailable: true,
    },
  ];

  return (
      <IphoneContainer>
      <ShiftCard
       availableShifts={availableShifts}
       pendingRequests={pendingRequests}
       finishedShifts={finishedShifts}
      />
    </IphoneContainer>
  );
}

