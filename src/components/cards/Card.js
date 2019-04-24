import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  cardImage: {
    height: "auto",
    width: "200px",
    backgroundColor: "white",
    padding: "1rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    "&:hover": {
      cursor: "pointer"
    }
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  focusedImage: {
    maxWidth: "100%"
  }
});

function Card(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const onCardClicked = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img
        className={classes.cardImage}
        src={`${process.env.PUBLIC_URL}/${props.path}`}
        alt={props.name}
        onClick={onCardClicked}
      />
      <Modal open={open} onClose={handleClose}>
        <div style={getModalStyle()} className={classes.paper}>
          <img
            className={classes.focusedImage}
            onClick={handleClose}
            src={`${process.env.PUBLIC_URL}/${props.path}`}
            alt={props.name}
          />
        </div>
      </Modal>
    </div>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(Card);
