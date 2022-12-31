import { FC, ReactElement } from "react";

type Props = {
  size?: number;
  children: ReactElement;
};

export const Svg: FC<Props> = ({ size = 20, children }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ width: size, height: size }}
    >
      {children}
    </svg>
  );
};
