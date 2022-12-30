import { FC, useCallback, useContext } from "react";
import { Collection, CollectionUpdateContext } from "../../useCollection";
import { usePage } from "../Router/Router";
import { CollectionListItem } from "./CollectionListItem";
import { Textarea } from "./Textarea";

type Props = {
  items: Collection[string]["items"];
};

export const CollectionDetail: FC<Props> = ({ items }) => {
  const pageState = usePage();
  if (pageState.page === "top") return null;

  const id = pageState.id;

  const update = useContext(CollectionUpdateContext);

  const handleSubmit = useCallback((value: string) => {
    update?.addCollectionItem(id, {
      type: "text",
      text: value,
    });
  }, []);

  console.log({ items });

  return (
    <div>
      <div className="flex flex-col gap-3">
        {Object.entries(items).map(([key, value]) => (
          <CollectionListItem key={key} item={value} />
        ))}
      </div>
      <Textarea onSubmit={handleSubmit} />
    </div>
  );
};
