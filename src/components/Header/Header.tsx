import { FC, ReactNode } from "react";
import { Arrow } from "../Icons";
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
    <header>
      <div className="flex ">
        <h1 className="text-white font-bold flex align-middle gap-2">
          {!isTopPage && (
            <button onClick={onClickBackButton}>
              <Arrow size={12} />
            </button>
          )}
          {title}
        </h1>
      </div>
      <button className="text-blue-300 text-sm underline" onClick={onClick}>
        {buttonText}
      </button>
    </header>
  );
};
