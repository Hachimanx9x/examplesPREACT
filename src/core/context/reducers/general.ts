import { REDUCERS_NAME } from "../enums";
import { TypeGeneralPayload, TypeGlobalPayload } from "../interfaces";

export const initialStates = {
  isAutorization: false,
  textGeneral: "",
};

export const enum STATES_REDUCER_GENERAL {
  ACCEPT = "asgene",
  DENIED = "degene",
  UPDATE = "upgene",
  MSGGENERAL = "msgene",
}

export function reducerGeneral(
  state: typeof initialStates,
  action: TypeGeneralPayload<any>
): typeof initialStates {
  switch (action.name) {
    case STATES_REDUCER_GENERAL.ACCEPT:
      return { ...state, isAutorization: true };
    case STATES_REDUCER_GENERAL.DENIED:
      return { ...state, isAutorization: false };
    case STATES_REDUCER_GENERAL.UPDATE:
      return { ...state, isAutorization: action.payload };
    case STATES_REDUCER_GENERAL.MSGGENERAL:
      return { ...state, textGeneral: action.payload };
    default:
      return state;
  }
}

export function methodsGeneralR(dis: (a: TypeGlobalPayload) => void) {
  return {
    acceptAuth: () =>
      dis({
        name: REDUCERS_NAME.GENERALREDUCER,
        payload: {
          name: STATES_REDUCER_GENERAL.ACCEPT,
        },
      }),
    deniedAuth: () =>
      dis({
        name: REDUCERS_NAME.GENERALREDUCER,
        payload: {
          name: STATES_REDUCER_GENERAL.DENIED,
        },
      }),
    updateAuth: (auth: boolean) =>
      dis({
        name: REDUCERS_NAME.GENERALREDUCER,
        payload: {
          name: STATES_REDUCER_GENERAL.UPDATE,
          payload: auth,
        },
      }),
    msjGeneral: (txt: string) =>
      dis({
        name: REDUCERS_NAME.GENERALREDUCER,
        payload: {
          name: STATES_REDUCER_GENERAL.MSGGENERAL,
          payload: txt,
        },
      }),
  };
}
