"use client";

import { FC, ReactNode, createElement, useState, useMemo } from "react";
import clsx from "clsx";

import { TypographyProps } from "./interface";

// move to separate file
const Wrapper = ({
  tag = "p",
  children,
  className,
}: {
  // todo
  tag: TypographyProps["as"];
  children: ReactNode;
  className?: string;
}) => {
  return createElement(
    tag,
    {
      className,
    },
    children
  );
};

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
      case "displayXl":
        setCurrentTag("h1");
        break;
      case "displayLg":
        setCurrentTag("h2");
        break;
      // to do
      default:
        setCurrentTag(as);
    }
  }, [as, variant]);

  return (
    <div>
      <Wrapper
        tag={currentTag}
        className={clsx({
          ["text-[3rem] leading-[130%]"]: variant === "displayXl",
          ["text-gray-1"]: color === "Gray1",
          ["font-extrabold"]: fw === "extraBold",
          ["font-bold"]: fw === "bold",
          ["font-normal"]: fw === "regular", // use other fw's
          ["text-center"]: center,
          ["text-4xl leading-[150%]"]: variant === "displayLg",
          ["text-3xl leading-[150%]"]: variant === "displayMd",
          ["text-2xl leading-[150%]"]:
            variant === "displaySm" || variant === "textXl",
          ["text-xl leading-[150%]"]: variant === "displayXs",
          ["text-lg leading-[150%]"]:
            variant === "displayXxs" || variant === "textLg",
          ["text-base leading-[150%]"]: variant === "textMd",
          ["text-sm leading-[150%]"]: variant === "textSm",
          ["text-xs leading-[150%]"]: variant === "textXs",

          ["text-white"]: color === "White",
          ["text-primary"]: color === "Primary",
          ["text-primary-text"]: color === "Primary-text",
          ["text-secondary"]: color === "Pecondary",
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
