import React, { useState } from 'react';
import Image from 'next/image'
const Accordion = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border rounded-md overflow-hidden mb-4 ${isOpen ? 'border-gray-300' : 'border-gray-200'}`}>
      <div className="bg-white text-[#2F3542] px-4 py-3 cursor-pointer flex justify-between items-center" onClick={toggleAccordion}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          &#9660;
        </div>
      </div>
      <div className={`p-4 bg-white text-black ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex">
          <div className="w-1/4 rounded-md overflow-hidden relative h-[165px]">
            <Image src={imageSrc} alt={title} fill objectFit="cover" className="rounded-md" />
          </div>
          <div className="w-3/4 ml-3">
            <p className="text-base">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
