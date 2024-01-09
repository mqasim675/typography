export type Option2 = {
  lable: string;
  value: string | number;
};
export interface SelectProps {
  placeholder: string;
  options: Option2[];
  selected: Option2[] | null;
  onChange: (Selection: Option2) => void;
}
