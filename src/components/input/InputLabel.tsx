import { LabelHTMLAttributes, ReactNode } from "react";

interface InputLabelInterface extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  error?: string;
}

export default function InputLabel({
  children,
  error,
  ...props
}: InputLabelInterface) {
  return (
    <label
      {...props}
      className="flex items-center justify-start gap-[1px] text-sm font-semibold drop-shadow-mds"
    >
      {children}
    </label>
  );
}
