import { FC } from "react";
import { Collection } from "../../useCollection";

type Props = {
  items: Collection[string]["items"];
};

export const CollectionDetail: FC<Props> = ({ items }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {Object.entries(items).map(([key, value]) => (
          <div key={key} className="bg-bg2 p-2 rounded">
            {value.type === "text" ? (
              <p className="text-white">{value.text}</p>
            ) : (
              <a className="text-white" target="_blank" href={value.page.url}>
                <p>{value.page.title}</p>
                <p>{value.page.url}</p>
                {value.page.ogImageUrl !== undefined && (
                  <img src={value.page.ogImageUrl} alt="" />
                )}
                {value.page.favicon !== undefined && (
                  <img src={value.page.favicon} alt="" />
                )}
              </a>
            )}
          </div>
        ))}
      </div>
      <textarea name="" id="" cols={30}></textarea>
    </div>
  );
};
