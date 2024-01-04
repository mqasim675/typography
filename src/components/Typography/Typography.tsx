"use client";

import { FC, useState, useMemo } from "react";

import clsx from "clsx";

import { TypographyProps } from "./interface";

import { Wrapper } from "./Wrapper";
export const Typography: FC<TypographyProps> = ({
  variant = "textMd",
  color = "PrimaryText",
  fw = "regular",
  children,
  center = false,
  as = "p",
}) => {
  const [currentTag, setCurrentTag] = useState<TypographyProps["as"]>("p");

  useMemo(() => {
    switch (variant) {
      case "heading1":
        setCurrentTag("h1");
        break;
      case "heading2":
        setCurrentTag("h2");
        break;
      case "heading3":
        setCurrentTag("h3");
        break;
      case "heading4":
        setCurrentTag("h4");
        break;
      case "heading5":
        setCurrentTag("h5");
        break;
      case "heading6":
        setCurrentTag("h6");
        break;
      default:
        setCurrentTag(as);
    }
  }, [as, variant]);

  return (
    <div>
      <Wrapper
        tag={currentTag}
        className={clsx({
          ["text-[3rem] leading-[130%]"]: variant === "heading1",
          ["text-gray-1"]: color === "Gray1",
          ["font-extrabold"]: fw === "extraBold",
          ["font-bold"]: fw === "bold",
          ["font-normal"]: fw === "regular",
          ["text-center"]: center,
          ["text-4xl leading-[150%]"]: variant === "heading2",
          ["text-3xl leading-[150%]"]: variant === "heading3",
          ["text-2xl leading-[150%]"]:
            variant === "heading4" || variant === "textLg",
          ["text-xl leading-[150%]"]: variant === "heading5",
          ["text-lg leading-[150%]"]:
            variant === "heading6" || variant === "textMd",
          ["text-base leading-[150%]"]: variant === "textNorm",
          ["text-sm leading-[150%]"]: variant === "textSm",
          ["text-xs leading-[150%]"]: variant === "textXs",
          ["text-white"]: color === "White",
          ["text-primary"]: color === "Primary",
          ["text-primary-text"]: color === "Primary-text",
          ["text-secondary"]: color === "Secondary",
          ["text-secondary-text"]: color === "Secondary-text",
          ["text-gray1"]: color === "Gray1",
          ["text-gray2"]: color === "Gray2",
          ["text-gray3"]: color === "Gray3",
          ["text-gray4"]: color === "Gray4",
          ["text-gray5"]: color === "Gray5",
          ["text-gray6"]: color === "Gray6",
        })}
      >
        {children}
      </Wrapper>
    </div>
  );
};
