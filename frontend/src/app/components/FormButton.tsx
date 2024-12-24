'use client';

import React from 'react';
import Lottie from 'lottie-react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  isLoading?: boolean;
  animationPath?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className = '',
  onClick,
  children,
  isLoading = false,
}) => {
  const animationData = require('../../../public/animation.json');

  return (
    <button
      type={type}
      className={`bg-black h-14 rounded-md mt-6 text-white flex items-center justify-center hover:bg-slate-600 transition-colors duration-300 ease-in-out ${className}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="w-8 h-8">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{
              transform: 'scale(6.0)',
              transformOrigin: 'center',
              width: '100%',
              height: '100%',
              color: 'white',
            }}
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
