export const initialState = {
  note: [],
};
export const ACTIONS = {
  ADD_NOTES: "addNotes",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTES:
      // console.log(state);
      console.log("title", action);
      //console.log("note", action.lists);
      return state;
    default:
      return state;
  }
};

export default reducer;
