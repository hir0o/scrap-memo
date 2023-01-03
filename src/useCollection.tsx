import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

type PageInfo = {
  url: string;
  title: string;
  favicon: string | undefined;
  ogImageUrl: string | undefined;
};

type Order = {
  order: number
}

export type CollectionItemUrl = {
  type: "url";
  page: PageInfo;
} & Order

export type CollectionItemText = {
  type: "text";
  text: string;
} & Order

export type CollectionItem = Record<
  string,
  CollectionItemUrl | CollectionItemText
>;

export type Collection = Record<
  string,
  {
    title: string;
    items: CollectionItem;
  }
>;

const tmpCollections: Collection = {
  [uuidv4()]: {
    title: "Svelte",
    items: {
      [uuidv4()]: {
        type: "text",
        text: "Svelte is a radical new approach to building user interfaces.",
        order: 1,
      },
    },
  },
};

export const useCollection = (
  collections: Collection,
  setCollections: Dispatch<SetStateAction<Collection>>
) => {
  const addCollection = (collection: Collection[string]) => {
    setCollections((prev) => ({
      ...prev,
      collection,
    }));
  };

  const deleteCollection = (collectionId: string) => {
    setCollections((prev) => {
      const { [collectionId]: _, ...rest } = prev;
      return rest;
    });
  };

  const addCollectionItem = (
    collectionId: string,
    item: CollectionItem[string]
  ) => {
    setCollections((prev) => {
      return {
        ...prev,
        [collectionId]: {
          ...prev[collectionId],
          items: {
            ...prev[collectionId].items,
            [uuidv4()]: item,
          },
        },
      };
    });
  };

  const updateCollectionItem = (
    collectionId: string,
    itemId: string,
    item: CollectionItem[string]
  ) => {
    setCollections((prev) => {
      return {
        ...prev,
        [collectionId]: {
          ...prev[collectionId],
          items: {
            ...prev[collectionId].items,
            [itemId]: item,
          },
        },
      };
    });
  };

  return {
    addCollection,
    deleteCollection,
    addCollectionItem,
    updateCollectionItem,
  };
};

type CollectionContext = Collection;

export const CollectionStateContext = createContext<CollectionContext>({});

type UpdateContext = ReturnType<typeof useCollection> | null;

export const CollectionUpdateContext = createContext<UpdateContext>(null);

let init = false;
export const CollectionContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [collections, setCollections] = useState<Collection>({});
  const update = useCollection(collections, setCollections);

  if (!init) {
    if (typeof chrome !== "undefined") {
      chrome.storage.local.get(["collection"]).then((res) => {

        setCollections(res.collection);
      });
    }
    init = true;
  }

  useEffect(() => {
    if (typeof chrome === "undefined") return;
    if (!init) return;

    console.log("set", collections);

    chrome.storage.local.set({ collection: collections });
  }, [collections]);

  return (
    <CollectionStateContext.Provider value={collections}>
      <CollectionUpdateContext.Provider value={update}>
        {children}
      </CollectionUpdateContext.Provider>
    </CollectionStateContext.Provider>
  );
};
