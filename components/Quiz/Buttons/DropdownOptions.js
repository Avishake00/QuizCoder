import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa";
import { useQuizConfig } from '@/store';

const DropdownOptions = () => {
  const Languages = ["Linux", "PHP", "Docker","Kubernetes"];
  const Level = ["Easy", "Medium", "Hard"];
  const config = useQuizConfig((state) => state.config);
  const addCategory = useQuizConfig((state) => state.addCategory);
  const addLevel = useQuizConfig((state) => state.addLevel);

  return (
    <section className='flex justify-evenly items-center py-3'>
      <div className="px-7 py-4 w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className='flex outline-none justify-between px-4 py-2 w-4/5 rounded-lg shadow-md hover:bg-blue-500 hover:text-white border border-blue-200 items-center text-center'>
            {config.category ? (
              config.category
            ) : (
              <div className='flex gap-2 items-center '>
                <p className="text-gray-500">Select Category</p>
                <FaCaretDown />
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Languages.map((e) => (
              <DropdownMenuItem key={e} onClick={() => addCategory(e)}>
                {e}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-7 py-4 w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className='flex outline-none text-center justify-between px-4 py-2 w-4/5 rounded-lg shadow-md hover:bg-blue-500 hover:text-white border border-blue-200'>
            {config.level ? (
              config.level
            ) : (
              <div className='flex gap-2 items-center'>
                <p className="text-gray-500">Select Level</p>
                <FaCaretDown />
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Levels</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Level.map((e) => (
              <DropdownMenuItem key={e} onClick={() => addLevel(e)}>
                {e}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default DropdownOptions;
