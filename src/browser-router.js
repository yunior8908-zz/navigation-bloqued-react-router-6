import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

function BrowserRouter({ children }) {
  const { current: history } = useRef(createBrowserHistory({ window }));

  const [{ action, location }, setHistoryState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setHistoryState), [history]);

  return (
    <Router action={action} location={location} navigator={history}>
      <HistoryContext.Provider value={history}>
        {children}
      </HistoryContext.Provider>
    </Router>
  );
}

export default BrowserRouter;
