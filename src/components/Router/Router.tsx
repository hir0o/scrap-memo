import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Page } from "./Page";

type Page = "top" | "scrap";

const PageContext = createContext<{ page: Page }>({
  page: "top",
});

export const usePage = () => {
  return useContext(PageContext);
};

const PageUpdateContext = createContext<{
  setPage: Dispatch<SetStateAction<Page>>;
} | null>(null);

export const usePageUpdate = () => {
  return useContext(PageUpdateContext);
};

export const Router: FC = () => {
  const [page, setPage] = useState<Page>("top");

  return (
    <PageContext.Provider
      value={{
        page,
      }}
    >
      <PageUpdateContext.Provider
        value={{
          setPage,
        }}
      >
        <Page />
      </PageUpdateContext.Provider>
    </PageContext.Provider>
  );
};
