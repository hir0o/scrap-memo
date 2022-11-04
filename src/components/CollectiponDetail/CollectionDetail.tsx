import { FC } from "react";
import { Collection } from "../../useCollection";

type Props = {
  collection: Collection;
};

export const CollectionDetail: FC<Props> = ({ collection }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {Object.entries(collection.items).map(([key, value]) => (
          <div key={key} className="bg-bg2 p-2 rounded">
            {value.type === "text" ? (
              <p className="text-white">{value.text}</p>
            ) : (
              <a className="text-white" target="_blank" href={value.url}>
                {value.url}
              </a>
            )}
          </div>
        ))}
      </div>
      <textarea name="" id="" cols={30}></textarea>
    </div>
  );
};
