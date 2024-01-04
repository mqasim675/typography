import React, { FC } from "react";

import { clsx } from "clsx";

import { TagButtonProps } from "./interface";

import { Typography } from "../Typography";

export const TagButton: FC<TagButtonProps> = ({
  size,
  color,
  bgColor,
  children,
  className,
}) => {
  return (
    <span
      className={clsx({
        // size

        ["py-[6px] px-[10px] text-xs leading-[21px]"]: size === "Lg",
        ["py-[5px] px-[10px] text-[10px] leading-[18px]"]: size === "Md",

        // color

        ["text-white"]: color === "White",

        // bgColor

        ["bg-primary hover:bg-button-disabled-hovered"]: bgColor === "Primary",
        ["bg-secondary"]: bgColor === "Secondary",
        ["bg-secondary-text"]: bgColor === "Secondary-text",

        // className

        [className]: !!className,
      })}
    >
      {children}
    </span>
  );
};
