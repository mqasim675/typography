import React from "react";

type Colors =
  | "White"
  | "Primary"
  | "Primary-text"
  | "Secondary"
  | "Secondary-text"
  | "Gray1"
  | "Gray2"
  | "Gray3"
  | "Gray4"
  | "Gray5"
  | "Gray6";

export interface ButtonProps {
  variant?: "Outlined" | "Contained"; // = "Contained"
  size?: "Lg" | "Md" | "Sm";
  color?: Colors; // = "White";
  bgColor?: Colors; // = "Primary";
  disabled?: boolean; // = false
  fullWidth?: boolean; // = false
  children: React.ReactNode;
}
