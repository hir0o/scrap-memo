import { FC, useCallback, useContext } from "react";
import { useToggle } from "../../hooks/useToggle";
import { replaceToHtml } from "../../lib/replacer";
import {
  Collection,
  CollectionItem,
  CollectionItemText,
  CollectionStateContext,
  CollectionUpdateContext,
} from "../../useCollection";
import { usePage, usePageId } from "../Router/Router";
import { Card } from "./Card";
import { CollectionTextArea } from "./CollectionTextArea";
import { Textarea } from "./Textarea";

type Props = {
  text: CollectionItemText["text"];
  id: string;
};

export const TextCard: FC<Props> = ({ text, id }) => {
  const pageId = usePageId();
  const toggle = useToggle(false);
  const collection = useContext(CollectionStateContext);
  const update = useContext(CollectionUpdateContext);

  const textValue = (collection[pageId].items[id] as CollectionItemText).text;

  const handleSubmit = useCallback((value: string) => {
    update?.updateCollectionItem(pageId, id, {
      type: "text",
      text: value,
    } as CollectionItem[string]);
    toggle.close();
  }, []);

  return (
    <>
      {toggle.isOpen ? (
        <Textarea onSubmit={handleSubmit} initialValue={textValue}></Textarea>
      ) : (
        <Card>
          <button className="text-white text-left w-full" onClick={toggle.open}>
            <div
              dangerouslySetInnerHTML={{
                __html: replaceToHtml(text),
              }}
            />
          </button>
        </Card>
      )}
    </>
  );
};
