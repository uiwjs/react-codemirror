import React, { PropsWithChildren, createContext, useContext, useEffect, useReducer } from 'react';
import { EditorStateConfig } from '@codemirror/state';
import { MergeView, MergeConfig } from '@codemirror/merge';
import { Extension } from '@codemirror/state';

export interface StoreContextValue extends InitialState {
  dispatch?: React.Dispatch<InitialState>;
}

export interface InitialState extends MergeConfig {
  modifiedExtension?: Extension[];
  modified?: EditorStateConfig;
  originalExtension?: Extension[];
  original?: EditorStateConfig;
  view?: MergeView;
  theme?: 'light' | 'dark' | 'none' | Extension;
  container?: HTMLDivElement | null;
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

export interface ProviderProps {
  theme?: InitialState['theme'];
}

export const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({ children, theme }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, theme });
  useEffect(() => dispatch({ theme }), [theme]);
  return <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>;
};
