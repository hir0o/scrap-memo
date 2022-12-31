import { FC, useCallback, useContext } from "react";
import { Collection, CollectionUpdateContext } from "../../useCollection";
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
      text: value,
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        {Object.entries(items).map(([key, value]) => (
          <CollectionListItem key={key} item={value} />
        ))}
      </div>
      <CollectionTextArea onSubmit={handleSubmit} />
    </div>
  );
};
