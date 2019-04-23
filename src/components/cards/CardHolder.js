import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "material-ui-flat-pagination";
import { withStyles } from "@material-ui/core/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

import Card from "./Card";

const styles = theme => ({
  root: {
    overflow: "hidden"
  },
  slideLeft: {
    animation: ".4s ease-out 0s 1 slideInFromLeft"
  },
  "@keyframes slideInFromLeft": {
    "0%": {
      transform: "translateX(-100%)"
    },
    "100%": {
      transform: "translateX(0%)"
    }
  },
  slideRight: {
    animation: ".4s ease-out 0s 1 slideInFromRight"
  },
  "@keyframes slideInFromRight": {
    "0%": {
      transform: "translateX(200%)"
    },
    "100%": {
      transform: "translateX(0%)"
    }
  }
});

function CardHolder(props) {
  const { classes } = props;

  const [offset, setOffset] = useState(0);
  // const [slideClass, setSlideClass] = useState(classes.slideLeft);
  const total = props.cards.length;
  const medium = useMediaQuery("(max-width:1000px)");
  const small = useMediaQuery("(max-width:600px)");

  let limit = 8;
  if (medium) {
    limit = 6;
  }
  if (small) {
    limit = 4;
  }

  const getCardsToDisplay = () => {
    return props.cards.slice(offset, offset + limit);
  };

  const cards = getCardsToDisplay().map(data => (
    <Grid item xs={"auto"} key={data.name}>
      <Card path={data.file} name={data.name} />
    </Grid>
  ));

  const handleClick = clickedOffset => {
    // const newClass =
    // clickedOffset > offset ? classes.slideRight : classes.slideLeft;
    // setSlideClass(newClass);
    setOffset(clickedOffset);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={16}>
        {cards}
      </Grid>
      <Pagination
        limit={limit}
        offset={offset}
        total={total}
        onClick={(e, clickedOffset) => handleClick(clickedOffset)}
      />
    </div>
  );
}

export default withStyles(styles)(CardHolder);
