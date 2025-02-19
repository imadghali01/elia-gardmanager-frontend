import { useState, useEffect } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function ExampleListUsers() {
  const [users, setUsers] = useState([]); // Liste des utilisateurs récupérés depuis l'API
  const [selected, setSelected] = useState(null); // Utilisateur sélectionné


// Récupération des utilisateurs depuis l'API
useEffect(() => {
  fetch("http://localhost:8000/users",{
    method: "GET",
    headers: { 
      "Accept": "application/json" 

    },
    credentials: "include",
})

.then(response => {
  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
  }
  return response.json();
})
.then(data => {
  console.log("Données reçues :", data); // Debugging
  if (Array.isArray(data) && data.length > 0) {
    const formattedUsers = data.map(user => ({
      id: user.id,
      name: user.fullName,
      avatar: user.avatar || ''
    }));
    setUsers(formattedUsers);
    setSelected(formattedUsers[0]); // Sélection du premier utilisateur par défaut
  }
})
.catch(error => console.error("Erreur lors de la récupération des utilisateurs :", error));
}, []);
if (users.length === 0) {
  return <p>Chargement des utilisateurs...</p>; // Affiche un message de chargement
}

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img alt="" src={selected.avatar} className="size-5 shrink-0 rounded-full" />
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden">
          {users.map((person) => (
            <ListboxOption key={person.id} value={person} className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden">
              <div className="flex items-center">
                <img alt="" src={person.avatar} className="size-5 shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{person.name}</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}