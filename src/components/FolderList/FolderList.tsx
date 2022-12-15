import { FC, useCallback } from "react";
import { Collection } from "../../useCollection";
import { usePageUpdate } from "../Router/Router";
import { FolderItem } from "./FolderItem";

type Props = {
  collections: Collection[];
};
export const FolderList: FC<Props> = ({ collections }) => {
  const { setPage } = usePageUpdate();

  const handleClick = useCallback(
    (id: string) => () => {
      setPage({
        page: "scrap",
        params: {
          id,
        },
      });
    },
    []
  );

  return (
    <div className="flex flex-col pb-4">
      {collections.map((item) => (
        <FolderItem collection={item} onClick={handleClick(item.id)} />
      ))}
    </div>
  );
};
