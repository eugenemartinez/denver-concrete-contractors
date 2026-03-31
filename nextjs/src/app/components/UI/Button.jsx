"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon = null,
  iconPosition = "right",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
  ...props
}) => {
  // Define style variants
  const variants = {
    primary: "bg-[#FFCC00] text-black hover:bg-[#e6b800] active:bg-[#d9ad00] shadow-md",
    secondary: "bg-white text-[#2B2B2B] border-2 border-[#FFCC00] hover:bg-[#FFCC00]/10 active:bg-[#FFCC00]/20 shadow-sm",
    outline: "bg-transparent text-[#2B2B2B] border-2 border-[#2B2B2B] hover:bg-[#2B2B2B]/5 active:bg-[#2B2B2B]/10",
    dark: "bg-[#2B2B2B] text-white hover:bg-[#3a3a3a] active:bg-[#444444] shadow-md",
    // Dark background variants
    "primary-dark": "bg-[#FFCC00] text-black hover:brightness-110 active:brightness-105 shadow-md",
    "secondary-dark": "bg-transparent text-white border-2 border-[#FFCC00] hover:bg-[#FFCC00]/20 active:bg-[#FFCC00]/30",
    "outline-dark": "bg-transparent text-white border-2 border-white hover:bg-white/10 active:bg-white/20",
    "ghost-dark": "bg-transparent text-white hover:bg-white/10 active:bg-white/20",
    // Special variants
    cta: "bg-[#FFCC00] text-black font-bold uppercase tracking-wider hover:bg-[#2B2B2B] hover:text-white shadow-lg",
  };

  // Define sizes
  const sizes = {
    sm: "text-sm px-4 py-2 rounded-xs",
    md: "text-base px-6 py-3 rounded-xs",
    lg: "text-lg px-8 py-4 rounded-xs",
    xl: "text-xl px-10 py-5 rounded-xs",
  };

  // Combine all classes
  const buttonClasses = `
    inline-flex items-center justify-center
    font-bold transition-all duration-300 cursor-pointer
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-60 cursor-not-allowed" : ""}
    ${className}
  `;

  // Button content with icon
  const ButtonContent = () => (
    <motion.span 
      className="flex items-center justify-center gap-2"
      initial={{ letterSpacing: variant === "cta" ? "0.05em" : "inherit" }}
      whileHover={{ letterSpacing: variant === "cta" ? "0.08em" : "inherit" }}
      transition={{ duration: 0.3 }}
    >
      {icon && iconPosition === "left" && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: -2 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
      
      {children}
      
      {icon && iconPosition === "right" && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.span>
  );

  // Handle rendering as button or link
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link 
          href={href} 
          className={buttonClasses}
          aria-label={ariaLabel || typeof children === "string" ? children : undefined}
          {...props}
        >
          <ButtonContent />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-label={ariaLabel}
      {...props}
    >
      <ButtonContent />
    </motion.button>
  );
};

// Convenience components for common use cases
Button.Primary = (props) => <Button variant="primary" {...props} />;
Button.Secondary = (props) => <Button variant="secondary" {...props} />;
Button.Dark = (props) => <Button variant="dark" {...props} />;
Button.Outline = (props) => <Button variant="outline" {...props} />;
Button.CTA = (props) => <Button variant="cta" {...props} />;
Button.PrimaryDark = (props) => <Button variant="primary-dark" {...props} />;
Button.SecondaryDark = (props) => <Button variant="secondary-dark" {...props} />;

export default Button;