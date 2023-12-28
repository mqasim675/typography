// typography.tsx
import React, { FC } from "react";
import clsx from "clsx";

import { TypographyProps } from "./interface";

const Wrapper = ({
  tag = "p",
  children,
  className,
}: {
  tag: TypographyProps["as"];
  children: React.ReactNode;
  className?: string;
}) => {
  return React.createElement(
    tag,
    {
      className,
    },
    children
  );
};

export const Typography: FC<TypographyProps> = ({
  variant,
  color,
  fw,
  children,
  center,
  as,
}) => {
  return (
    <div>
      <Wrapper
        tag={as}
        className={clsx({
          ["text-center"]: center,
          ["text-[3rem] leading-[130%]"]: variant === "displayXl",
          ["text-gray-1"]: color === "Gray1",
          ["font-extrabold"]: fw === "exbold",
          ["font-bold"]: fw === "bold",
          ["font-normal"]: fw === "regular",
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
        })}
      >
        {children}
      </Wrapper>
    </div>
  );
};
