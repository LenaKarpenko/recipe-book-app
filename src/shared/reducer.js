import {createContext} from "react";

export const AppActionType = {
  SET_RECIPES: 'set recipes',
  SET_ERROR: 'set error'
}

export const initialState = {
  recipes: [],
  error: null
}

export const reducer = (state, action) => {
  switch (action.type) {
    case AppActionType.SET_RECIPES: return {...state, recipes: action.payload}
    case AppActionType.SET_ERROR: return {...state, error: action.payload}
    default: return state
  }
}

export const AppContext = createContext({
  reducer: {
    state: initialState,
    dispatch: () => {}
  }
})