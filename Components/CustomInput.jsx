import React, { useState } from 'react';
import Link from 'next/link';

function CustomInput({ label, type, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`relative rounded-md mb-3 ${isFocused ? 'border-yellow-300' : 'border-gray-300'}`}>
      <label className={`absolute top-0 left-2 ${isFocused || value ? 'text-yellow-400' : 'text-gray-600'} transition-all duration-300 ${isFocused ? 'text-xs' : 'text-base'}`} htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="w-full bg-white text-black border border-grey-400 pb-2 pt-4 px-3 rounded-md focus:outline-none"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default CustomInput;
