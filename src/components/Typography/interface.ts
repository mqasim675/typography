// interface.ts
export interface TypographyProps {
  center?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?:
    | "displayXl"
    | "displayLg"
    | "displayMd"
    | "displaySm"
    | "displayXs"
    | "displayXxs"
    | "base"
    | "textXl"
    | "textLg"
    | "textMd"
    | "textSm"
    | "textXs";
  color?: "White" | "Gray1" | "Gray2" | "Gray3";
  fw?: "regular" | "medium" | "semibold" | "bold" | "exbold" | "black";
  children: React.ReactNode;
}
