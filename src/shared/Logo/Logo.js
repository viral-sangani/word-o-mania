import React from 'react';

const Logo = () => {
  return (
    <div
      style={{ width: 220, height: 50, fontSize: 25 }}
      className="flex flex-col justify-center pl-4 text-white font-bold bg-primary
      hover:bg-white hover:text-primary transition duration-200 ease-in-out"
    >
      <span>World-O-Mania</span>
    </div>
  );
};

export default Logo;
