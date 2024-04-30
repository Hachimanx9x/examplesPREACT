export interface TypeGeneralPayload<T> {
  name: string;
  payload?: T;
}
export interface TypeGlobalPayload {
  name: string;
  payload: TypeGeneralPayload<any>;
}
