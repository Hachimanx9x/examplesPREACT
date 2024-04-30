import { JSX, createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import {
  initialStates,
  methodsGeneralR,
  reducerGeneral,
} from "./reducers/general";
import { REDUCERS_NAME } from "./enums";
import { TypeGlobalPayload } from "./interfaces";

const listInitialState = {
  general: initialStates,
};

const listInitalMethods = {
  generalMethods: methodsGeneralR(() => {}),
};
const toolContext = createContext<typeof listInitialState>(listInitialState);
const toolMethodsContext =
  createContext<typeof listInitalMethods>(listInitalMethods);

export function useToolContext() {
  return useContext(toolContext);
}
export function useToolMethodsContext() {
  return useContext(toolMethodsContext);
}

function useGlobalReducer() {
  const reducer = (
    state: typeof listInitialState,
    action: TypeGlobalPayload
  ) => {
    switch (action.name) {
      case REDUCERS_NAME.GENERALREDUCER:
        return {
          ...state,
          general: reducerGeneral(state.general, action.payload),
        };
      default:
        return state;
    }
  };
  // const [tools, dispatch] = useReducer(reducer, listInitialState);

  const [tools, setTools] = useState(listInitialState);

  const dispatch = (a: TypeGlobalPayload) => {
    setTools((state) => {
      return reducer(state, a);
    });
  };

  const methods = {
    generalMethods: methodsGeneralR(dispatch),
  };

  return {
    tools,
    methods,
  };
}

export const ToolGLobalProvider = ({ children }: { children: JSX.Element }) => {
  const { tools, methods } = useGlobalReducer();

  return (
    <toolContext.Provider value={tools}>
      <toolMethodsContext.Provider value={methods}>
        {children}
      </toolMethodsContext.Provider>
    </toolContext.Provider>
  );
};
