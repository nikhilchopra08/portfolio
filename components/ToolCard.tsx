import React from 'react';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {
  imgUrl: string,
  title: string,
  description: string,
};

const ToolCard = ({ imgUrl, title , description}: Props) => {
  return (
    <div className="relative group w-full h-52 md:h-72 rounded-t-xl overflow-hidden mx-auto">
      <div 
        className="w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          <div className="text-white text-center p-4 overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <div className='flex flex-col gap-6'>
            <p>{title}</p>
            <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
