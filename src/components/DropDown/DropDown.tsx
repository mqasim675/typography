"use client";

import Image from "next/image";

import * as React from "react";

import { useState, FC } from "react";

import clsx from "clsx";

import { DropDownProps } from "./interface";

import { Option } from "@/components/DropDown/DropDownOption";

import PolygonBlack from "@/Asset/Images/PolygonBlack.svg";

import PolygonRed from "@/Asset/Images/PolygonRed.svg";

export const DropDown: FC<DropDownProps> = ({ color, variant, label }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>(Option);
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  console.log(typeof selectedValue);
  const toggleDropdown = () => {
    setOpen(!open);
    setIsClicked(!isClicked);
  };
  const handleSelect = (item: any) => {
    setSelectedValue(item);
    setOpen(false);
  };

  return (
    <div>
      <span
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer"
        style={{ color: isClicked ? "#DD1E33" : "#111928" }}
      >
        {selectedValue ? selectedValue.value : "Teams"}
        <div className="ml-1">
          {open ? (
            <Image src={PolygonRed} alt="logo" />
          ) : (
            <Image src={PolygonBlack} alt="logo" />
          )}
        </div>
      </span>
      {open && (
        <div className="flex items-center list-none">
          <div
            className={clsx({
              [`bg-secondary`]: color === "Secondary",
              ["py-3 px-2 bg-slate-500 text-base font-medium text-white tracking-widest leading-6 "]:
                variant === "Md",
            })}
          >
            <option>{label}</option>
            {Option?.map((item: any, index: number) => (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className="mr-1 hover:bg-slate-800 w-full cursor-pointer"
              >
                {item.value}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
