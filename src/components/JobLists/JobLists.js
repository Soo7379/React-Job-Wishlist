import React, { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import ReactTimeAgo from "react-time-ago";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import "./JobLists.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    marginTop: "150px",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    textAlign: "center",
  },
  button: {
    margin: "auto",
    marginLeft: "5px",
    marginBottom: "5px",
  },
  deleteButton: {
    float: "right",
  },
}));

const JobLists = () => {
  let date = new Date();
  const classes = useStyles();
  const { jobLists, deleteJob } = useContext(GlobalContext);

  const [open, setOpen] = useState(false);
  const [jobId, setJobId] = useState("");

  const handleOpen = (id) => {
    setOpen(true);
    setJobId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeJob = (e) => {
    e.preventDefault();

    deleteJob(jobId);

    handleClose();
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Delete Job</h2>
      <p>Are you sure you want to delete this job?</p>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={removeJob}
      >
        Delete
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleClose}
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <>
      {jobLists.map((job) => (
        <div className="jobLists">
          <IconButton aria-label="delete" className={classes.deleteButton}>
            <DeleteIcon onClick={() => handleOpen(job.id)} />

            <Modal
              open={open}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </IconButton>

          <div className="jobLists__logo">
            <EmojiPeopleIcon fontSize="large" />
          </div>
          <div className="jobLists__companyName">{job.companyName}</div>
          <div className="jobLists__title">{job.jobTitle}</div>
          <div className="jobLists__time">
            added <ReactTimeAgo date={date} />
            ....
          </div>
        </div>
      ))}
    </>
  );
};

export default JobLists;
