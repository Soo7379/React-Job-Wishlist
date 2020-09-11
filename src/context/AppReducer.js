export default (state, action) => {
  switch (action.type) {
    case "DELETE_JOB":
      return {
        ...state,
        jobLists: state.jobLists.filter((job) => job.id !== action.payload),
      };
    case "ADD_JOBS":
      return {
        ...state,
        jobLists: [action.payload, ...state.jobLists],
      };
    default:
      return state;
  }
};
