import { FC } from "react";
import { Collection } from "../../useCollection";
import { CollectionListItem } from "./CollectionListItem";

type Props = {
  items: Collection[string]["items"];
};

export const CollectionDetail: FC<Props> = ({ items }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {Object.entries(items).map(([key, value]) => (
          <CollectionListItem key={key} item={value} />
        ))}
      </div>
      <textarea name="" id="" cols={30}></textarea>
    </div>
  );
};
