import { FC, useCallback, useState } from "react";
import { CollectionDetail } from "../components/CollectiponDetail";
import { FolderList } from "../components/FolderList";
import { Header } from "../components/Header";
import { Collection, useCollection } from "../useCollection";
import { Layout } from "./Layout";

export const Top: FC = () => {
  const { collections } = useCollection();

  return (
    <Layout
      header={
        <Header onClick={() => {}} buttonText="新規作成" title="コレクション" />
      }
    >
      <FolderList collections={collections} />
    </Layout>
  );
};
