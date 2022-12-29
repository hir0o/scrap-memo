import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

type CollectionItemUrl = {
  type: "url";
  url: string;
  title: string;
};

type CollectionItemText = {
  type: "text";
  text: string;
};

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
        type: "url",
        url: "https://svelte.dev/",
        title: "スベルト",
      },
      [uuidv4()]: {
        type: "text",
        text: "Svelte is a radical new approach to building user interfaces.",
      },
      [uuidv4()]: {
        type: "url",
        url: "https://svelte.dev/tutorial/basics",
        title: "滑るとチュート",
      },
    },
  },
};

export const useCollection = (
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

  return { addCollection, deleteCollection, addCollectionItem };
};

type CollectionContext = Collection;

export const CollectionStateContext = createContext<CollectionContext>({});

type UpdateContext = ReturnType<typeof useCollection> | null;

export const CollectionUpdateContext = createContext<UpdateContext>(null);

export const CollectionContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [collections, setCollections] = useState<Collection>(tmpCollections);
  const update = useCollection(setCollections);

  return (
    <CollectionStateContext.Provider value={collections}>
      <CollectionUpdateContext.Provider value={update}>
        {children}
      </CollectionUpdateContext.Provider>
    </CollectionStateContext.Provider>
  );
};
