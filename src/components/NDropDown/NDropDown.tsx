"use client";

import { FC, useState } from "react";

import { Option2 } from "@/app/interface";

import Image from "next/image";

import { SelectProps } from "@/app/interface";

import PolygonBlack from "@/Asset/Images/PolygonBlack.svg";

import PolygonRed from "@/Asset/Images/PolygonRed.svg";

export const NDropDown: FC<SelectProps> = ({
  placeholder,
  options,
  onChange,
  selected,
}) => {
  const [showOption, setShowOption] = useState<boolean>(false);

  const [data, setData] = useState<any[]>([options]);

  const [isClicked, setIsClicked] = useState<boolean>(false);

  console.log("isClicked", isClicked);

  const toggleDropdown = () => {
    setShowOption(!showOption);
    setIsClicked(!isClicked);
    console.log("showOption", showOption);
  };

  return (
    <div>
      <div className="flex items-center" onClick={toggleDropdown}>
        <div
          style={{ color: isClicked ? "#DD1E33" : "#111928" }}
          className="flex items-center h-10 py-3 px-2 cursor-pointer text-base font-medium text-white tracking-widest leading-6 w-fit"
        >
          {selected ? selected.lable : placeholder}
        </div>
        <div>
          <svg
            width="7"
            height="5"
            viewBox="0 0 7 5"
            fill={isClicked ? "#ff0000" : "#111928"}
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <path
              id="Polygon 13"
              d="M3.89816 4.17235C3.70513 4.35591 3.40208 4.35591 3.20905 4.17236L0.516927 1.61233C0.189712 1.30117 0.409937 0.749999 0.861478 0.749999L6.24573 0.75C6.69727 0.75 6.9175 1.30117 6.59028 1.61233L3.89816 4.17235Z"
              fill={isClicked ? "#ff0000" : "#111928"}
            />
          </svg>
        </div>
      </div>
      {showOption && (
        <div>
          {data?.[0].map((option: any) => (
            <div
              className="cursor-pointer px-3 hover:bg-slate-500 py-2 hover:text-white w-20"
              key={option}
              onClick={() => {
                onChange(option);
                setShowOption(false);
              }}
            >
              <span>{option.lable}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
