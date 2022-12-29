import { FC, useCallback, useContext } from "react";
import { Collection, CollectionStateContext } from "../../useCollection";
import { usePageUpdate } from "../Router/Router";
import { FolderItem } from "./FolderItem";

export const FolderList: FC = () => {
  const { setPage } = usePageUpdate();
  const collections = useContext(CollectionStateContext);

  const handleClick = useCallback(
    (id: string) => () => {
      setPage({
        page: "scrap",
        id,
      });
    },
    []
  );

  return (
    <div className="flex flex-col pb-4">
      {Object.entries(collections).map(([key, value]) => (
        <FolderItem collection={value} onClick={handleClick(key)} />
      ))}
    </div>
  );
};
