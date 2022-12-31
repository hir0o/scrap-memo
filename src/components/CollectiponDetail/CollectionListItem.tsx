import { FC } from "react";
import { CollectionItem } from "../../useCollection";
import { Card } from "./Card";
import { PageCard } from "./PageCard";
import { TextCard } from "./TextCard";

type Props = {
  item: CollectionItem[string];
  id: string;
};

export const CollectionListItem: FC<Props> = ({ item, id }) => {
  switch (item.type) {
    case "text":
      return <TextCard id={id} text={item.text} />;
    case "url":
      return <PageCard page={item.page} />;
  }
};
