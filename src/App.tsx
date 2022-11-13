import { FC, useCallback, useState } from "react";
import { CollectionDetail } from "./components/CollectiponDetail";
import { FolderList } from "./components/FolderList";
import { Header } from "./components/Header";
import { Collection, useCollection } from "./useCollection";

const App: FC = () => {
  const { collections } = useCollection();

  const [selectedCollection, setSelectedCollection] = useState<Collection>();

  const handleSelect = useCallback(
    (collection: Collection) => {
      setSelectedCollection(collection);
    },
    [setSelectedCollection]
  );

  const title = selectedCollection?.title ?? "コレクション";

  const handleClick = useCallback(() => {
    const url = location.href;
    console.log(url);
  }, []);

  return (
    <div className="bg-bg p-2 flex flex-col gap-3">
      <Header title={title}>
        <div>
          <>
            <div className="flex ">
              {selectedCollection !== undefined && (
                <button
                  type="button"
                  onClick={() => setSelectedCollection(undefined)}
                  className="mr-2 text-white"
                >
                  &lt;
                </button>
              )}
              <h1 className="text-white font-bold">{title}</h1>
            </div>
            {selectedCollection === undefined ? (
              <button className="text-blue-300 underline">
                + 新しいコレクションを追加する
              </button>
            ) : (
              <button className="text-blue-300 underline" onClick={handleClick}>
                + 現在のページを保存する
              </button>
            )}
          </>
        </div>
      </Header>
      <hr className="border-gray-500 border-opacity-50 border-1" />
      {selectedCollection ? (
        <CollectionDetail collection={selectedCollection} />
      ) : (
        <FolderList onSelect={handleSelect} collections={collections} />
      )}
    </div>
  );
};

export default App;
