import React from "react";

import Header from "./components/Header/Header";
import AddJob from "./components/AddJob/AddJob";
import JobLists from "./components/JobLists/JobLists";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Header />

        <AddJob />

        <JobLists />
      </div>
    </GlobalProvider>
  );
}

export default App;
