import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Card: FC<Props> = ({ children }) => {
  return <div className="bg-gray-700 p-2 rounded">{children}</div>;
};
