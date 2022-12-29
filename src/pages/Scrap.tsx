import { FC, useCallback, useContext } from "react";
import { Header } from "../components/Header";
import { usePage } from "../components/Router/Router";
import {
  CollectionStateContext,
  CollectionUpdateContext,
} from "../useCollection";
import { Layout } from "./Layout";
import { CollectionDetail } from "../components/CollectiponDetail";

const getOgImageUrl = (url: string): Promise<string | undefined> => {
  return fetch(url)
    .then((res) => res.text())
    .then((text) => {
      const dom = new DOMParser().parseFromString(text, "text/html");
      const ogImg = dom.querySelector("meta[property='og:image']");

      return ogImg?.getAttribute("content") || undefined;
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

    // TODO: 正規表現でちゃんと抜き出した方がいいかも？
    const newUrl = tab.url.split("/")[2];

    const ogImageUrl = await getOgImageUrl(tab.url);

    const page = {
      title: tab.title,
      url: newUrl,
      favicon: tab.favIconUrl,
      ogImageUrl: ogImageUrl,
    };

    console.log(page);

    update?.addCollectionItem(id, {
      type: "url",
      page,
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
