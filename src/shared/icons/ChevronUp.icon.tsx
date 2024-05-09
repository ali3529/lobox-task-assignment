import { FC } from "react";
import { IConProps } from "./IconPops.type";
import clsx from "clsx";

export const ChevronUp: FC<IConProps> = ({ height, width, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      width={width}
      height={height}
      className={clsx(className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};
