import { FC } from "react";

type Props = {
  title: React.ReactNode;
  back?: boolean;
};

export const Header: FC<Props> = ({ title, back }) => {
  return (
    <header className="flex flex-col justify-center items-start gap-3">
      <div>
        <div className="flex ">
          <h1 className="text-white font-bold">{title}</h1>
        </div>
        <button className="text-blue-300 text-sm underline">新規作成</button>
      </div>
    </header>
  );
};
