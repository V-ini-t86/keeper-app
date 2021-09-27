export const initialState = {
  note: [],
  archive: [],
  remind: [],
  trash: [],
  allSelect: [],
};
export const ACTIONS = {
  ADD_NOTES: "addNotes",
  ADD_TO_ARCHIVE: "addToArchive",
  ADD_TO_TRASH: "addToTrash",
  ADD_TO_ALL_SELECT: "addToAllSelect",
  ADD_TO_REMIND: "addToRemind",
  REMOVE_FROM_SELECT: "removeFromSelect",
  ADD_ALL_TO_TRASH: "addAllToTrash",
  ADD_ALL_TO_ARCHIVE: "addAllToArchive",
  MODAL_EDITABLE: "modalEditable",
  REMOVE_FROM_SELECTED_NOTE: "removeFromSelectedNote",
};

function addNotes(title, lists) {
  return {
    id: Date.now(),
    title,
    lists,
    remin: null,
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTES:
      const title = action.title;
      let lists = action.lists;
      lists = lists.split("\n");
      const notes = addNotes(title, lists);
      const note = [...state.note, notes];
      state.note = note;
      return { ...state };
    case ACTIONS.ADD_TO_ARCHIVE:
      const data = action.data;
      const archive = [...state.archive, data];
      state.archive = archive;
      return { ...state };
    case ACTIONS.ADD_TO_TRASH:
      const noteId = action.data.id;
      const notesData = state.note;
      const deleteData = [...state.trash, action.data];
      console.log(deleteData);
      const del = notesData.filter((val) => {
        return val.id !== noteId;
      });
      state.note = del;
      state.trash = deleteData;
      return { ...state };
    case ACTIONS.ADD_TO_ALL_SELECT:
      const selectId = action.id;
      const t = state.allSelect.includes(selectId);
      if (t) {
        return { ...state };
      }
      const allSelect = [...state.allSelect, selectId];
      state.allSelect = allSelect;
      console.log(state);
      return { ...state };
    case ACTIONS.REMOVE_FROM_SELECT:
      state.allSelect = [];
      return { ...state };
    case ACTIONS.ADD_TO_REMIND:
      let rem = action.data;
      state.remind = [...state.remind, rem];
      return { ...state };
    case ACTIONS.ADD_ALL_TO_TRASH:
      let ids = action.ids;
      // let notesAdd = state.note;
      let remToTrash = state.note.filter((val) => {
        return ids.includes(val.id);
      });
      state.note = state.note.filter((val) => {
        return !ids.includes(val.id);
      });
      state.trash = [...state.trash, ...remToTrash];
      console.log("trash", state.trash);
      return { ...state };
    case ACTIONS.ADD_ALL_TO_ARCHIVE:
      let archiveIds = action.ids;
      let addToArchive = state.note.filter((val) => {
        return archiveIds.includes(val.id);
      });
      state.note = state.note.filter((val) => {
        return !archiveIds.includes(val.id);
      });
      state.archive = [...state.archive, ...addToArchive];
      console.log("archives", state.archive);
      return { ...state };
    case ACTIONS.MODAL_EDITABLE:
      let mid = action.id;
      let mTitle = action.title;
      let mlist = action.lists;
      mlist = mlist.split("\n");
      console.log("modal", mid, mTitle, mlist);
      const n = addNotes(mTitle, mlist);
      state.note = state.note.filter((val) => {
        return val.id !== mid;
      });
      state.note = [...state.note, n];
      return { ...state };
    case ACTIONS.REMOVE_FROM_SELECTED_NOTE:
      let remId = action.id;
      state.allSelect = state.allSelect.filter((val) => {
        return val !== remId;
      });
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
