import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  header: ReactNode;
};

export const Layout: FC<Props> = ({ header, children }) => {
  return (
    <div className="bg-bg p-3 flex flex-col gap-3">
      {header}
      <hr className="border-gray-500 border-opacity-50 border-1" />
      {children}
    </div>
  );
};
