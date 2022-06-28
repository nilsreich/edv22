import React from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "bg-blue-400"
    : "";

  const sizeClass = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-4xl";
      default:
        return "";
    }
  }
  
  return (
    <button
      className={`storybook-button ${mode} ${sizeClass()}`}
      {...props}
    >
      {label}
    </button>


  );
};
