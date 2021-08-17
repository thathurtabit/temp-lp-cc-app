import React, {
  createContext,
  useReducer,
  useMemo,
  Reducer,
  ReactNode,
  ReactNodeArray,
} from "react";
import { initState } from "../state/initState";
import { appReducer } from "../reducers/app/reducer";
import { IAppContext } from "../state/state.types";

export const AppContext = createContext<IAppContext>({
  state: initState,
  dispatch: function () {
    return null;
  },
});

AppContext.displayName = "ChatDemoProvider";

export interface IAppProvider {
  children: ReactNode | ReactNodeArray;
}

export const AppProvider = ({ children }: IAppProvider) => {
  const [state, dispatch] = useReducer<Reducer<any, any>>(
    appReducer,
    initState,
    undefined
  );

  const memoizedContextValue: IAppContext = useMemo<IAppContext>(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={memoizedContextValue}>
      {children}
    </AppContext.Provider>
  );
};
