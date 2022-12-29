import { FC, useCallback, useContext } from "react";
import { Header } from "../components/Header";
import { usePage } from "../components/Router/Router";
import {
  CollectionStateContext,
  CollectionUpdateContext,
} from "../useCollection";
import { Layout } from "./Layout";
import { CollectionDetail } from "../components/CollectiponDetail";

export const Scrap: FC = () => {
  const pageState = usePage();
  const update = useContext(CollectionUpdateContext);
  const collection = useContext(CollectionStateContext);

  if (pageState.page === "top") return null;

  const id = pageState.id;

  const scrap = collection[id];

  const handleClick = useCallback(() => {
    update?.addCollectionItem(id, {
      type: "text",
      text: "テスト！！！",
    });
  }, []);

  return (
    <Layout
      header={
        <Header
          onClick={handleClick}
          buttonText="現在のページを追加"
          title="コレクション名"
        />
      }
    >
      <h1>{scrap.title}</h1>
      <CollectionDetail items={scrap.items} />
    </Layout>
  );
};
