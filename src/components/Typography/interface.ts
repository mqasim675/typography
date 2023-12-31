export interface TypographyProps {
  center?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "textLg"
    | "textMd"
    | "textNorm"
    | "textSm"
    | "textXs";
  color?:
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
  fw?: "regular" | "medium" | "semiBold" | "bold" | "extraBold" | "black";
  children: React.ReactNode;
}
