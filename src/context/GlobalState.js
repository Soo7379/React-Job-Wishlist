import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  jobLists: [
    {
      id: Math.floor(Math.random() * 100),
      companyName: "Google",
      jobTitle: "Web Developer",
    },
    {
      id: Math.floor(Math.random() * 100),
      companyName: "Facebook",
      jobTitle: "Full Stack Developer",
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteJob(id) {
    dispatch({
      type: "DELETE_JOB",
      payload: id,
    });
  }

  function addJobs(job) {
    dispatch({
      type: "ADD_JOBS",
      payload: job,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        jobLists: state.jobLists,
        deleteJob,
        addJobs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
