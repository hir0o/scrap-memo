import { FC, useCallback, useState } from "react";
import { FolderList } from "../components/FolderList";
import { Header } from "../components/Header";
import { Collection, useCollection } from "../useCollection";
import { Layout } from "./Layout";

export const Top: FC = () => {
  return (
    <Layout
      header={
        <Header onClick={() => {}} buttonText="新規作成" title="コレクション" />
      }
    >
      <FolderList />
    </Layout>
  );
};
