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
          ["font-bold"]: fw === "bold",
        })}
      >
        {children}
      </Wrapper>
    </div>
  );
};
