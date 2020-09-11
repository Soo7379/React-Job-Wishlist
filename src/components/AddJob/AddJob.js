import React, { useState, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import WorkIcon from "@material-ui/icons/Work";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import { GlobalContext } from "../../context/GlobalState";

import "./AddJob.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    marginTop: "150px",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    margin: theme.spacing(1),
    width: "25ch",
    height: "5ch",
  },
  button: {
    width: "50%",
    margin: "auto",
    marginBottom: "10px",
  },
}));

const AddJob = () => {
  const { addJobs } = useContext(GlobalContext);

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (companyName && jobTitle) {
      const newJob = {
        id: Math.floor(Math.random() * 100),
        companyName,
        jobTitle,
      };

      addJobs(newJob);
    } else {
      alert("Please fill out all of fields");
    }

    setCompanyName("");
    setJobTitle("");

    handleClose();
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Add a Job</h2>

      <div className="addJob__icons">
        <i>
          <SearchIcon />
        </i>
        <input
          className="addJob__field"
          type="text"
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          placeholder="Company Name"
        />
      </div>

      <div className="addJob__icons">
        <i>
          <WorkIcon />
        </i>
        <input
          className="addJob__field"
          type="text"
          onChange={(e) => {
            setJobTitle(e.target.value);
          }}
          value={jobTitle}
          placeholder="Job Title"
        />
      </div>

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleAdd}
      >
        Continue
      </Button>
    </div>
  );

  return (
    <div className="addJob">
      <Button
        className="addJob__button"
        variant="contained"
        onClick={handleOpen}
      >
        +
      </Button>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default AddJob;
