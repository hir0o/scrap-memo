import { FC } from "react";
import { Scrap } from "../../pages/Scrap";
import { Top } from "../../pages/Top";
import { usePage } from "./Router";

export const Page: FC = () => {
  const { page } = usePage();

  switch (page) {
    case "top":
      return <Top />;
    case "scrap":
      return <Scrap />;
  }
};
