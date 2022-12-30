import { FC } from "react";
import { replaceToHtml } from "../../lib/replacer";
import { CollectionItemText } from "../../useCollection";

type Props = {
  text: CollectionItemText["text"];
};

export const TextCard: FC<Props> = ({ text }) => {
  return (
    <p className="text-white">
      <div
        dangerouslySetInnerHTML={{
          __html: replaceToHtml(text),
        }}
      />
    </p>
  );
};
