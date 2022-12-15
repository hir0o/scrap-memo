import { FC, useCallback, useState } from "react";
import { CollectionDetail } from "../components/CollectiponDetail";
import { FolderList } from "../components/FolderList";
import { Header } from "../components/Header";
import { Collection, useCollection } from "../useCollection";
import { Layout } from "./Layout";

export const Top: FC = () => {
  const { collections } = useCollection();

  const [selectedCollection, setSelectedCollection] = useState<Collection>();

  const handleSelect = useCallback(
    (collection: Collection) => {
      setSelectedCollection(collection);
    },
    [setSelectedCollection]
  );

  const title = selectedCollection?.title ?? "コレクション";

  const handleClick = useCallback(() => {
    const url = location.href;
    console.log(url);
  }, []);

  return (
    <Layout>
      <Header title={title} />
      <hr className="border-gray-500 border-opacity-50 border-1" />
      {selectedCollection ? (
        <CollectionDetail collection={selectedCollection} />
      ) : (
        <FolderList onSelect={handleSelect} collections={collections} />
      )}
    </Layout>
  );
};
