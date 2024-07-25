import React from 'react'
import { EyeIcon , CodeBracketIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {
    imgUrl: string,
    title : string,
    description : string,
    gitUrl : string,
    previewUrl : string
  };

const ToolCard = ({ imgUrl , title , description , gitUrl , previewUrl} : Props) => {
  return (
    <div>
        <div 
        className='h-52 md:h-72 rounded-t-xl relative mx-auto group' 
        style={{background : `url(${imgUrl})` , backgroundSize : 'cover' }}
        >
          <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
            {description}
          </div>
        </div>
    </div>
  );
};

export default ToolCard