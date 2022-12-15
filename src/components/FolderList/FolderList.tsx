import { FC } from "react";
import { Collection } from "../../useCollection";

type Props = {
  collections: Collection[];
  onSelect: (collection: Collection) => void;
};

export const FolderList: FC<Props> = ({ collections, onSelect }) => {
  console.log("aa");

  return (
    <div className="flex flex-col pb-4">
      {collections.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => onSelect(item)}
          className="bg-bg2 text-left hover:shadow-lg p-2 flex flex-col gap-2 rounded"
        >
          <h1 className="text-white font-bold">{item.title}</h1>
          <p className="text-gray-400 text-sm">
            {Object.keys(item.items).length}個の項目
          </p>
        </button>
      ))}
    </div>
  );
};
