'use client';

import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';

export default function ExampleListShifts({ onSelect }) {
  const shifts = ["shift1", "shift2", "shift3", "shift4", "shift5", "shift6"];
  const [selected, setSelected] = useState(shifts[0]); // Sélectionne shift1 par défaut

  return (
    <Listbox value={selected} onChange={(shift) => { setSelected(shift); onSelect(shift); }}>
      <Label className="block text-sm font-medium text-gray-900">Select a shift</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-50 cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="block truncate">{selected}</span>
          </span>
          <ChevronUpDownIcon aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden">
          {shifts.map(shift => ( 
            <ListboxOption key={shift} value={shift} className="cursor-pointer p-2 hover:bg-gray-200">
              {shift}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
