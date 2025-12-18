import React from 'react'

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, interactive = false }) => {
  const baseStyles = 'bg-white rounded-xl shadow-subtle p-6 transition-all duration-300'
  const interactiveStyles = interactive ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : ''

  return (
    <div
      className={`${baseStyles} ${interactiveStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
