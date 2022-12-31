import { FC } from "react";
import { Svg } from "./Svg";

type Props = {
  size?: number;
};

export const Arrow: FC<Props> = ({ size = 32 }) => {
  return (
    <Svg>
      <g>
        <polygon
          points="419.916,71.821 348.084,0 92.084,256.005 348.084,512 419.916,440.178 235.742,256.005"
          style={{ fill: "rgb(255, 255, 255)" }}
        ></polygon>
      </g>
    </Svg>
  );
};
