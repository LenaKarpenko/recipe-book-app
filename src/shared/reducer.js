import {createContext} from "react";
import { createReducer } from "./utils/createReducer";

export const AppActionType = {
  SET_RECIPES: 'set recipes',
  SET_ERROR: 'set error'
}

export const initialState = {
  recipes: [],
  error: null
}

export const reducer = createReducer({
  [AppActionType.SET_RECIPES]: (state, action) => ({...state, recipes: action.payload}),
  [AppActionType.SET_ERROR]: (state, action) => ({...state, error: action.payload}),
})

export const AppContext = createContext({
  reducer: {
    state: initialState,
    dispatch: () => {}
  }
})