import { FC } from "react";
import { useToggle } from "../../hooks/useToggle";
import { replaceToHtml } from "../../lib/replacer";
import { CollectionItemText } from "../../useCollection";
import { usePage, usePageId } from "../Router/Router";
import { Card } from "./Card";

type Props = {
  text: CollectionItemText["text"];
  id: string;
};

export const TextCard: FC<Props> = ({ text, id }) => {
  const pageId = usePageId();
  const toggle = useToggle(false);

  return (
    <>
      {toggle.isOpen ? (
        <textarea name="" id=""></textarea>
      ) : (
        <Card>
          <button className="text-white text-left" onClick={toggle.open}>
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
