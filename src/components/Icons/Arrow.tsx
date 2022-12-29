import { FC } from "react";

type Props = {
  size?: number;
};

export const Arrow: FC<Props> = ({ size = 32 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ width: size, height: size }}
    >
      <g>
        <polygon
          points="419.916,71.821 348.084,0 92.084,256.005 348.084,512 419.916,440.178 235.742,256.005"
          style={{ fill: "rgb(255, 255, 255)" }}
        ></polygon>
      </g>
    </svg>
  );
};
