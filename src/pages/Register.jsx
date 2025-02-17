import { useState } from "react";
import '../styles/tailwind-global.css';
import { ChevronDownIcon } from '@heroicons/react/24/solid';




export default function Register() {
    // Gestion des champs de saisie avec useState
    const [formData, setFormData] = useState({
        passWord: "",
        fullName:"",
        gender: "",
        activity: "",
        address: "",
        location: "",
        email: "",
        phone: "",
    });

    // Gestion des changements de champs
    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Données soumises :", formData);
    // Ici, tu peux appeler une API pour envoyer les données à ton backend (post)
    try {
        const response = await fetch("http://localhost:8000/user",{
            method: "POST",
            headers: {
                "content-type":"application/json",
            },
            body:JSON.stringify(formData),
        });

        const data =await response.json();
        console.log("Réponse du serveur :", data);
    } catch (error) {
        console.error("Erreur lors de l'envoi :", error);
    }

    };




    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-md rounded-lg">

        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10 mt-5">
        <img
            alt="Your Company"
            src="/src/assets/img/LogoElia.png"
            className="mx-auto h-20 w-auto"
        />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
                </label>
                <input
                id="email"
                name="email"
                placeholder="Email Address"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Champ passWord */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <input
                id="passWord"
                name="passWord"
                placeholder="Password"
                type="passWord"
                required
                autoComplete="passWord"
                value={formData.passWord}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Full Name */}
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
                </label>
                <input
                id="fullName"
                name="fullName"
                placeholder="Jone Sina"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Champ de genre */}
            <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                Gender
                </label>

                <div className="mt-2">
                <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                
                
                
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                    id="gender"
                    name="gender"
                    defaultValue=""
                    onChange={handleChange}
                    className="col-start-1 row-start-1 w-[400px] appearance-none rounded-md py-1.5  pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                    <option></option>
                    <option>Mr</option>
                    <option>Mrs</option>
                </select>
                
                <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
                </div>
                </div>
            </div>
            </div>

            {/* Champ de Post */}
            <label htmlFor="Position" className="block text-sm font-medium text-gray-700 mb-1 ">
                Position
            </label>
            <div className="grid  focus-within:relative">
                
                <select
                    id="activity"
                    name="activity"
                    defaultValue=""
                    onChange={handleChange}
                    className="col-start-1 row-start-1 border w-[400px] appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                    <option></option>
                    <option>user</option>
                    <option>viewer</option>
                    <option>admin</option>
                </select>
                <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-4 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
            </div>

            {/* Champ TRegistered Address */}
            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Registered Address
                </label>
                <input
                id="address"
                name="address"
                placeholder="Registered Address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            {/* Location */}
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                location of Service
                </label>
                <input
                id="location"
                name="location"
                placeholder="Registered Working"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>


            {/* Phone Number */}
            <div>
                <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
                Phone Number
                </label>
                <input
                id="phone"
                name="phone"
                placeholder="0463641220"
                type="text"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Bouton de soumission */}
            <div>
                <button
                type="submit"
                className="w-full flex justify-center rounded-md bg-orange-500 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                Create User
                </button>
            </div>
        </form>
        </div>
        </div>
        </div>
    );
}
