import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="https://junior-plum-rmkrpipxl7.edgeone.app/Design%20sem%20nome%20(2).png"
      alt="Remy Studio Logo"
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
    />
  );
};
