import { TypographyProps } from "./interface";
import { createElement, ReactNode } from "react";
export const Wrapper = ({
  tag = "p",
  children,
  className,
}: {
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
