'use client';

import { useState, useEffect } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import Avatar from 'react-avatar';


export default function ExampleListUsers({onSelect}) {
  const [users, setUsers] = useState([]); // Liste des utilisateurs récupérés depuis l'API
  const [selected, setSelected] = useState(null); // Utilisateur sélectionné


// Récupération des utilisateurs depuis l'API
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "GET",
        headers: {
          "Accept": "application/json" // Demande du JSON
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Données reçues :", data); // Debugging

      if (Array.isArray(data) && data.length > 0) {
        const formattedUsers = data.map(user => ({
          id: user._id,
          name: user.fullName,
          avatar: user.avatar || '' // Utilise un avatar vide si non défini
        }));

        console.log("🔍 Utilisateurs formatés :", formattedUsers);

        setUsers(formattedUsers);
        setSelected(formattedUsers[0]); // Sélection du premier utilisateur par défaut
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
  };

  fetchUsers();
}, []);

if (users.length === 0) {
  return <p>Chargement des utilisateurs...</p>;
}

  return (
    <Listbox value={selected} onChange={(user) => {
      setSelected(user);
      console.log("Utilisateur sélectionné :", user);
      onSelect(user);
    }}>
      <Label className="block text-sm font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-50 cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
          {selected?.avatar ? (
              <img alt="" src={selected.avatar} className="size-5 shrink-0 rounded-full" />
            ) : (
              <Avatar name={selected?.name} size="32" round={true} />
            )}
            <span className="block truncate">{selected?.name || "Utilisateur inconnu"}</span>
          </span>
          <ChevronUpDownIcon aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden">
          {users.map(user => ( 
            <ListboxOption key={user.id} value={user} className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden">
              <div className="flex items-center">
              {user.avatar ? (
        <img alt="" src={user.avatar} className="size-8 shrink-0 rounded-full" />
      ) : (
        <Avatar name={user.name} size="32" round={true} /> // Avatar généré automatiquement
      )}

              <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
              {user.name || "Utilisateur inconnu"}
              </span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
