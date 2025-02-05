import { useState } from "react";
import '../styles/tailwind-global.css';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; 



export default function Register() {
    // Gestion des champs de saisie avec useState
    const [formData, setFormData] = useState({
    email: "",
    password: "",
    });

    // Gestion des changements de champs
    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données soumises :", formData);
    // Ici, tu peux appeler une API pour envoyer les données à ton backend
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

            {/* Champ contact */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Phone Number
                </label>
                <input
                id="email"
                name="email"
                placeholder="0463641220"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Champ Full Name */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Full Name
                </label>
                <input
                id="email"
                name="email"
                placeholder="Full Name"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Champ de genre */}
            <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                Genre
                </label>

                <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                
                <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Mr/Mrs/Mx"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
                
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                    id="currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Mx</option>
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
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Post
                </label>
                <input
                id="password"
                name="password"
                type="password"
                placeholder="Admin/User"
                required
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Champ TRegistered Address */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Registered Address
                </label>
                <input
                id="email"
                name="email"
                placeholder="Registered Address"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

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
