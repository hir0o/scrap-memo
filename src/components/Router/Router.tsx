import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Page } from "./Page";

type TopPage = {
  page: "top";
};

type ScrapPage = {
  page: "scrap";
  id: string;
};

type PageState = TopPage | ScrapPage;

const PageContext = createContext<PageState>({
  page: "top",
});

export const usePage = () => {
  return useContext(PageContext);
};

const PageUpdateContext = createContext<{
  setPage: Dispatch<SetStateAction<PageState>>;
}>(
  {} as {
    setPage: Dispatch<SetStateAction<PageState>>;
  }
);

export const usePageUpdate = () => {
  return useContext(PageUpdateContext);
};

export const Router: FC = () => {
  const [page, setPage] = useState<PageState>({
    page: "top",
  });

  return (
    <PageContext.Provider value={page}>
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
