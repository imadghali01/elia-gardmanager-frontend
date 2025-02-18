import { FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function ShiftCard({ availableShifts = [], pendingRequests = [], finishedShifts = [] }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 overflow-hidden">
      <div className="w-[375px] h-[812px] bg-white shadow-2xl rounded-[40px] border border-gray-300 overflow-hidden relative touch-pan-y">
        <div className="h-[calc(100%-4rem)] p-4 space-y-6 overflow-auto snap-mandatory snap-y overscroll-contain">
          
          {/* Available Shifts */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Available Shifts</h3>
          {availableShifts.length > 0 ? (
            availableShifts.map((shift, index) => (
              <ShiftCardItem key={index} shift={shift} status="Available" />
            ))
          ) : (
            <p className="text-sm text-gray-500">No available shifts.</p>
          )}

          {/* Pending Requests */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Pending Requests</h3>
          {pendingRequests.length > 0 ? (
            pendingRequests.map((shift, index) => (
              <ShiftCardItem key={index} shift={shift} status="Pending" />
            ))
          ) : (
            <p className="text-sm text-gray-500">No pending requests.</p>
          )}

          {/* Finished Shifts */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Finished Shifts</h3>
          {finishedShifts.length > 0 ? (
            finishedShifts.map((shift, index) => (
              <ShiftCardItem key={index} shift={shift} status="Finished" />
            ))
          ) : (
            <p className="text-sm text-gray-500">No finished shifts.</p>
          )}

          <div className="h-12"></div> {/* Réduction de l'espace en bas */}
        </div>
      </div>
    </div>
  );
}

function ShiftCardItem({ shift, status }) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-gray-100 relative snap-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className={`text-sm font-bold px-2 py-1 rounded-full ${shift.score >= 0 ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
            {shift.score}
          </span>
          <h4 className="text-md font-medium text-gray-900">{shift.name}</h4>
        </div>
        <span className="text-xs text-gray-600">{shift.date}</span>
      </div>
      <p className="text-sm text-gray-700 mt-1 font-medium">{shift.time}</p>
      {shift.reason && (
        <p className="text-xs text-gray-600 mt-1">
          <span className="font-semibold">Reason: </span>
          {shift.reason}
        </p>
      )}
      <div className="mt-3 flex items-center justify-between text-sm text-gray-700">
        <span className="flex items-center space-x-2">
          <FaEnvelope className="text-gray-500" />
          <span>{shift.email}</span>
        </span>
        <span className="flex items-center space-x-2 font-semibold">
          <FaPhone className="text-gray-500" />
          <span>{shift.phone}</span>
        </span>
      </div>
      <div className="mt-3">
        {status === "Pending" ? (
          <button className="w-full text-center py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 transition">
            Ask for a switch
          </button>
        ) : status === "Finished" ? (
          <>
            <div className="text-center text-sm font-semibold text-gray-700">
              Take the shift from <span className="text-red-500 font-bold">{shift.previousHolder ? shift.previousHolder : "Unknown"}</span>
            </div>
            <button className="w-full text-center py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition">
              Available for a switch
            </button>
          </>
        ) : (
          <button className="w-full text-center py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition">
            Available for a switch
          </button>
        )}
      </div>
    </div>
  );
}
