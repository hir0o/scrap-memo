import { FC, ReactNode } from "react";
import { usePage, usePageUpdate } from "../Router/Router";

type Props = {
  title: React.ReactNode;
  onClick: () => void;
  buttonText: string;
};

export const Header: FC<Props> = ({ title, onClick, buttonText }) => {
  const { page } = usePage();
  const { setPage } = usePageUpdate();
  const isTopPage = page === "top";

  const onClickBackButton = () => {
    setPage({
      page: "top",
    });
  };

  return (
    <header className="flex flex-col justify-center items-start gap-3">
      <div>
        <div className="flex ">
          <h1 className="text-white font-bold">
            {!isTopPage && <button onClick={onClickBackButton}>{"<"}</button>}
            {title}
          </h1>
        </div>
        <button className="text-blue-300 text-sm underline" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </header>
  );
};
