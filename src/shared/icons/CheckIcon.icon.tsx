import { FC } from "react";
import { IConProps } from "./IconPops.type";
import clsx from "clsx";

export const CheckIcon: FC<IConProps> = ({ height, width, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      width={width}
      height={height}
      className={clsx(className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
};

