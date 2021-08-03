export const createReducer = (cases) => (state, action) => {
  if (cases?.[action.type]) return cases[action.type]?.(state, action);
  return state;
}


