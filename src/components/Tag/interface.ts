import React from "react";

type Colors =
  | "White"
  | "Primary"
  | "Primary-text"
  | "Secondary"
  | "Secondary-text";

export interface TagButtonProps {
  size?: "Lg" | "Md";
  color?: Colors;
  bgColor?: Colors;
  className?: any;
  children: React.ReactNode;
}
