import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(5),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid rgba(0, 0, 0, 0.12);",
    borderRadius: 15,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4),
  },
}));

const ModalWindow = ({
  title = "You got an error!",
  titleColor = "error",
  text,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              color={titleColor}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography id="transition-modal-description">{text}</Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalWindow;
