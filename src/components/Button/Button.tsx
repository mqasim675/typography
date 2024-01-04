import React, { FC } from "react";

import { clsx } from "clsx";

import { ButtonProps } from "./interface";

import { Typography } from "../Typography";

export const Button: FC<ButtonProps> = ({
  size,
  color,
  bgColor,
  variant,
  children,
  active = false,
  disabled = false,
  fullWidth = false,
  className,
  rounded,
  typographyProps,
}) => {
  const _typographyProps: typeof typographyProps = {
    variant: "textNorm",
    as: "span",
    center: true,
    children,
    ...typographyProps,
  };

  return (
    <button
      disabled={disabled}
      className={clsx(
        " my-6 items-center",
        {
          // width

          ["w-full"]: fullWidth,

          // size

          ["py-3 px-7 text-base"]: size === "Lg",
          ["py-2 px-7 text-sm"]: size === "Md",
          ["py-[5px] px-5 text-sm"]: size === "Sm",
          ["py-[5px] px-[15px] text-sm leading-[150%]"]: size === "Xm",

          // color

          ["text-white"]: color === "White",
          ["text-dark5"]: color === "Dark5",
          ["text-secondary"]: color === "Secondary",

          // BG-color

          ["bg-button-disabled cursor-not-allowed rounded-md"]:
            bgColor === "Disable1",
          ["bg-primary hover:bg-button-disabled-hovered rounded-md"]:
            variant === "Contained" && bgColor === "Primary",
          ["bg-secondary hover:bg-button-secondary-hovered rounded-md"]:
            variant === "Contained" && bgColor === "Secondary",

          // variant

          ["bg-primary-text hover:bg-secondary-text rounded-md"]:
            variant === "Contained" && bgColor === "Tertiary",
          ["border border-primary bg-white text-primary hover:bg-button-outline-hovered hover:text-button-outline-hovered-text rounded-md"]:
            variant === "Outlined",
          ["border border-primary-text bg-white text-primary-text hover:bg-gray4 hover:text-primary-text rounded-md"]:
            variant === "Outlined" && bgColor === "Tertiary",
          ["border border-secondary bg-white text-secondary hover:bg-button-secondary-outline hover:text-button-secondary-hovered rounded-md"]:
            variant === "Outlined" && bgColor === "Secondary",

          // container

          ["rounded-l-md"]: rounded === "Md",
          ["bg-white border border-gray5"]:
            variant === "Outlined" && bgColor === "White",
          ["bg-primary"]: bgColor === "Primary",
        },
        className
      )}
    >
      <Typography {..._typographyProps} />
    </button>
  );
};
