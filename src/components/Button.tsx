import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  as?: 'button' | typeof Link;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  as = 'button',
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-inter font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantStyles = {
    primary: 'bg-gold text-white hover:bg-yellow-600 focus:ring-gold shadow-md hover:shadow-lg',
    secondary: 'bg-primary-dark text-white hover:bg-primary-steel focus:ring-primary-dark shadow-md hover:shadow-lg',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-white focus:ring-gold',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (as === Link && to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  )
}

export default Button
