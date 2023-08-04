import { ComponentType, HTMLAttributes, ReactNode } from "react";

interface InputErrorMessageInterface extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  icon?: ComponentType;
}

export default function InputErrorMessage({
  children,
  icon: Icon,
  ...props
}: InputErrorMessageInterface) {
  return (
    <span
      {...props}
      className="text-xs text-red-500 font-medium flex items-center justify-start gap-1 mt-2"
    >
      {Icon && <Icon />} {children}
    </span>
  );
}
