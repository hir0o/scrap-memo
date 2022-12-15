import { FC } from "react";
import { usePage } from "../components/Router/Router";

export const Scrap: FC = () => {
  const pageState = usePage();

  const id = pageState.page === "scrap" ? pageState.params.id : undefined;

  return (
    <div>
      <h1>this is scrap page</h1>
      page is {id}
    </div>
  );
};
