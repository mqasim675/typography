type Colors =
  | "White"
  | "Primary"
  | "Primary-text"
  | "Secondary"
  | "Secondary-text";

interface IDropdownOption {
  label: string | number;
  Value: string | number;
}
export interface DropDownProps {
  name?: string;
  color: Colors;
  width: boolean;
  bgColor: Colors;
  className: string;
  tabIndex?: number;
  labelName?: string;
  label: any;
  // placeHolder?: string;
  onChange: () => void;
  options: IDropdownOption[];
  variant: "Sm" | "Md" | "Lg";
  setSelectOptions: React.Dispatch<React.SetStateAction<string[]>>;
}
