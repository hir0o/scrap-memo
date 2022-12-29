import { FC } from "react";
import { Router } from "./components/Router";
import { CollectionContextProvider } from "./useCollection";

const App: FC = () => {
  return (
    <CollectionContextProvider>
      <Router />
    </CollectionContextProvider>
  );
};

export default App;
