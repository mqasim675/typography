import React from "react";

import { TypographyProps } from "../Typography/interface";

type Colors =
  | "White"
  | "Primary"
  | "Primary-text"
  | "Secondary"
  | "Secondary-text"
  | "Tertiary"
  | "Gray1"
  | "Gray2"
  | "Gray3"
  | "Gray4"
  | "Gray5"
  | "Gray6"
  | "Dark5"
  | "Disable1";

export interface ButtonProps {
  variant?: "Contained" | "Outlined" | "Container";
  size?: "Lg" | "Md" | "Sm" | "Xm";
  active?: boolean;
  onClick?: Event;
  color?: Colors;
  bgColor?: Colors;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  container?: string;
  rounded?: "Sm" | "Md" | "Md1";
  children: React.ReactNode;
  typographyProps?: TypographyProps;
}
