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
    setIsClicked(true);
    console.log("showOption", showOption);
  };

  return (
    <div>
      <div
        onClick={toggleDropdown}
        style={{ color: isClicked ? "#DD1E33" : "#111928" }}
        className="flex items-center h-10 py-3 px-2 cursor-pointer text-base font-medium text-white tracking-widest leading-6 w-fit"
      >
        {selected ? selected.lable : placeholder}

        <div className="ml-1">
          {showOption ? (
            <Image src={PolygonRed} alt="logo" />
          ) : (
            <Image src={PolygonBlack} alt="logo" />
          )}
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
