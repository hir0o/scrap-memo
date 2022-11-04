import { useState } from "react";

type CollectionItemUrl = {
  type: "url";
  url: string;
};

type CollectionItemText = {
  type: "text";
  text: string;
};

type CollectionItem = Record<string, CollectionItemUrl | CollectionItemText>;

export type Collection = {
  id: string;
  title: string;
  items: CollectionItem;
};

type UseCollection = () => {
  collections: Collection[];
  addCollection: (collection: Collection) => void;
  deleteCollection: (collection: Collection) => void;
};

const tmpCollections: Collection[] = [
  {
    id: "1",
    title: "Svelte",
    items: {
      "1": {
        type: "url",
        url: "https://svelte.dev/",
      },
      "2": {
        type: "text",
        text: "Svelte is a radical new approach to building user interfaces.",
      },
      "3": {
        type: "url",
        url: "https://svelte.dev/tutorial/basics",
      },
    },
  },
];

export const useCollection: UseCollection = () => {
  const [collections, setCollections] = useState<Collection[]>(tmpCollections);

  const addCollection = (collection: Collection) => {
    setCollections((prev) => [...prev, collection]);
  };

  const deleteCollection = (collection: Collection) => {
    setCollections((prev) => prev.filter((c) => c.id !== collection.id));
  };

  return { collections, addCollection, deleteCollection };
};
