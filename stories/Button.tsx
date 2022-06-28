import React from "react";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
}

export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "bg-blue-400" : "";

  const sizeClass = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-4xl";
      default:
        return "";
    }
  };

  return (
    <button className={` ${mode} ${sizeClass()} border rounded`} {...props}>
      {label}
    </button>
  );
};
