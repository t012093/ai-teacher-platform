import React from 'react';

export const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  };

  const classes = \`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className || ''}\`;

  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    />
  );
});