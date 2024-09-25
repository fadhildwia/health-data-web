import React from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, iconPosition = 'left', className = '' }) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 text-black font-semibold rounded-full transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
      {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
