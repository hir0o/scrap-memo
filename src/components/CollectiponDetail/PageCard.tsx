import { FC } from "react";
import { CollectionItem, CollectionItemUrl } from "../../useCollection";

type Props = {
  page: CollectionItemUrl["page"];
};
export const PageCard: FC<Props> = ({ page }) => {
  return (
    <a
      className="text-white grid grid-cols-[3fr_2fr] h-24 gap-4"
      target="_blank"
      href={page.url}
    >
      <div className="flex flex-col justify-between">
        <p className="text-sm">{page.title}</p>
        <div className="flex overflow-hidden w-full items-center gap-3">
          {page.favicon !== undefined && (
            <img className="w-4 h-4" src={page.favicon} alt="" />
          )}
          <p>{page.url}</p>
        </div>
      </div>
      <div className="flex place-items-center bg-slate-600">
        {page.ogImageUrl !== undefined && (
          <img className="object-cover" src={page.ogImageUrl} alt="" />
        )}
      </div>
    </a>
  );
};
