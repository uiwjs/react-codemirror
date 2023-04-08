import React, { PropsWithChildren, createContext, useContext, useReducer } from 'react';
import { EditorStateConfig } from '@codemirror/state';
import { MergeView, MergeConfig } from '@codemirror/merge';

export interface StoreContextValue extends InitialState {
  dispatch?: React.Dispatch<InitialState>;
}

export interface InitialState extends MergeConfig {
  modified?: EditorStateConfig;
  original?: EditorStateConfig;
  view?: MergeView;
}

export const initialState: InitialState = {
  modified: { doc: '' },
  original: { doc: '' },
};

export const Context = createContext<StoreContextValue>(initialState);

export function reducer(state: InitialState, action: InitialState): InitialState {
  return {
    ...state,
    ...action,
    modified: { ...state.modified, ...action.modified },
    original: { ...state.original, ...action.original },
  };
}

export const useStore = () => {
  return useContext(Context);
};

export const Provider: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>;
};
