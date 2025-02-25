import Navbar from "../components/Navbar";

export default function IphoneContainer({ children }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 overflow-hidden">
      <div className="relative w-[375px] h-[812px] bg-white shadow-2xl rounded-[40px] border border-gray-300 overflow-hidden touch-pan-y flex flex-col">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-34 h-5 bg-black rounded-b-xl shadow-lg z-30"></div>

        <Navbar />

        <div className="flex-1 p-4 space-y-6 overflow-y-auto min-h-0 overscroll-contain scroll-smooth scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}
