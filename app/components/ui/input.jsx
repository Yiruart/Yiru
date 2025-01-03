import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border-b border-slate-200 bg-white py-2  ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-200 focus-visible:outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
