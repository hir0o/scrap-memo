import { FC, useCallback, useContext } from "react";
import { Collection, CollectionItem, CollectionUpdateContext } from "../../useCollection";
import { usePage } from "../Router/Router";
import { CollectionListItem } from "./CollectionListItem";
import { CollectionTextArea } from "./CollectionTextArea";
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
    if (value === "") return;

    update?.addCollectionItem(id, {
      type: "text",
      // @ts-ignore
      text: value,
    })
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        {Object.entries(items).sort(([_, a], [__, b]) => a.order - b.order).map(([key, value]) => (
          <CollectionListItem key={key} id={key} item={value} />
        ))}
      </div>
      <CollectionTextArea onSubmit={handleSubmit} />
    </div>
  );
};
