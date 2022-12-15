import { FC } from "react";
import { Header } from "../components/Header";
import { usePage } from "../components/Router/Router";
import { Layout } from "./Layout";

export const Scrap: FC = () => {
  const pageState = usePage();

  if (pageState.page === "top") return null;

  const id = pageState.id;

  return (
    <Layout
      header={
        <Header
          onClick={() => {}}
          buttonText="現在のページを追加"
          title="コレクション名"
        />
      }
    >
      <h1>this is scrap page</h1>
      page is {id}
    </Layout>
  );
};
