import { FC } from "react";
import { CollectionItemText } from "../../useCollection";

type Props = {
  text: CollectionItemText["text"];
};

export const TextCard: FC<Props> = ({ text }) => {
  return <p className="text-white">{text}</p>;
};
