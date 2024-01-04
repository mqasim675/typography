type Colors =
  | "White"
  | "Primary"
  | "Primary-text"
  | "Secondary"
  | "Secondary-text";

export interface DropDownProps {
  value: string;
  lable: string;
  color: Colors;
  bgColor: Colors;
  onChange: () => void;
  className: string;
  Option: string[];
  variant: "Sm" | "Md" | "Lg";
  width: boolean;
  setSelectOptions: React.Dispatch<React.SetStateAction<string[]>>;
}
