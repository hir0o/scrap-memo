import { FC } from "react";
import { CollectionItem } from "../../useCollection";
import { PageCard } from "./PageCard";
import { TextCard } from "./TextCard";

type Props = {
  item: CollectionItem[string];
};

export const CollectionListItem: FC<Props> = ({ item }) => {
  return (
    <div className="bg-bg2 p-2 rounded">
      {item.type === "text" ? (
        <TextCard text={item.text} />
      ) : (
        <PageCard page={item.page} />
      )}
    </div>
  );
};
