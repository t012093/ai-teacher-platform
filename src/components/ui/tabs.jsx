import React from 'react';

export const Tabs = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={\`w-full \${className || ''}\`}
      {...props}
    />
  );
});

export const TabsList = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={\`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground \${className || ''}\`}
      {...props}
    />
  );
});

export const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={\`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm \${className || ''}\`}
      {...props}
    />
  );
});