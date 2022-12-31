import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  header: ReactNode;
};

export const Layout: FC<Props> = ({ header, children }) => {
  return (
    <div className="bg-gray-800 p-3 flex flex-col gap-3">
      {header}
      <hr className="border-gray-400 border-opacity-50 border-1" />
      {children}
    </div>
  );
};
