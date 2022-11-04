import { FC } from "react";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  back?: boolean;
};

export const Header: FC<Props> = ({ title, children, back }) => {
  return (
    <header className="flex flex-col justify-center items-start gap-3">
      {children}
    </header>
  );
};
