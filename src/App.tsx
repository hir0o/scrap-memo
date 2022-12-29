import { FC } from "react";
import { Router } from "./components/Router";
import { CollectionContextProvider } from "./useCollection";

const App: FC = () => {
  return (
    <main className="w-[400px]">
      <CollectionContextProvider>
        <Router />
      </CollectionContextProvider>
    </main>
  );
};

export default App;
