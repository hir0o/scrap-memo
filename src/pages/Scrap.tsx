import { FC, useCallback, useContext } from "react";
import { Header } from "../components/Header";
import { usePage } from "../components/Router/Router";
import {
  CollectionStateContext,
  CollectionUpdateContext,
} from "../useCollection";
import { Layout } from "./Layout";
import { CollectionDetail } from "../components/CollectiponDetail";

const getPageTitle = (url: string): Promise<string> => {
  return fetch(url)
    .then((res) => res.text())
    .then((text) => {
      const dom = new DOMParser().parseFromString(text, "text/html");
      const title = dom.head.querySelector("title")?.text.trim() || "untitled";
      return title;
    });
};

export const Scrap: FC = () => {
  const pageState = usePage();
  const update = useContext(CollectionUpdateContext);
  const collection = useContext(CollectionStateContext);

  if (pageState.page === "top") return null;

  const id = pageState.id;

  const scrap = collection[id];

  const handleClick = useCallback(async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    if (tab.url === undefined || tab.title === undefined) return;

    update?.addCollectionItem(id, {
      type: "url",
      url: tab.url,
      title: tab.title,
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
