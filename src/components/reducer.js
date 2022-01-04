import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isSpinnerLoading: true };

    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};
export default reducer;
