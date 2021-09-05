import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

function DataProvier({ initialState, children, reducer }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export default DataProvier;
export const useStateValue = () => useContext(StateContext);
