import React from 'react';

interface StudioLogoProps {
  className?: string;
  onClick?: () => void;
  heightClass?: string;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({
  className = '',
  onClick,
  heightClass = 'h-9 sm:h-10',
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group transition-transform duration-200 active:scale-95 ${className}`}
      title="Yavi Media Studio"
    >
      <img
        src="/logo.png"
        alt="Yavi Media Studio"
        className={`${heightClass} w-auto object-contain transition-opacity duration-200 group-hover:opacity-90`}
      />
    </div>
  );
};
