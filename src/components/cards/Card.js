import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  cardImage: {
    height: "auto",
    width: "200px",
    backgroundColor: "white",
    padding: "1rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
};

function Card(props) {
  const { classes } = props;
  return (
    <img
      className={classes.cardImage}
      src={`${process.env.PUBLIC_URL}/${props.path}`}
      alt={props.name}
    />
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(Card);
