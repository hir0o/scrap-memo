import { FC } from "react";
import { Collection, CollectionItem } from "../../useCollection";

type Props = {
  collection: Collection[string];
  onClick: () => void;
};

const getCount = (item: CollectionItem) => {
  return Object.keys(item).length;
};

export const FolderItem: FC<Props> = ({ collection, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gray-700 text-left hover:shadow-lg p-2 flex gap-2 rounded h-[100px]"
    >
      <div className="h-full w-[100px]" />
      <div>
        <h1 className="text-white font-bold">{collection.title}</h1>
        <p className="text-gray-400 text-sm">
          {getCount(collection.items)}個の項目
        </p>
      </div>
    </button>
  );
};
