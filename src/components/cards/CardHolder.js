import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "material-ui-flat-pagination";
import { withStyles } from "@material-ui/core/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import SwipeableViews from "react-swipeable-views";

import Card from "./Card";

const styles = theme => ({
  grids: {
    overflow: "hidden !important"
  }
});

function CardHolder(props) {
  const { classes } = props;

  const [index, setIndex] = useState(0);
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

  useEffect(() => {
    setIndex(0);
  }, [props.cards]);

  const cards = props.cards
    .map(data => (
      <Grid item xs={"auto"} key={data.name}>
        <Card path={data.file} name={data.name} />
      </Grid>
    ))
    .reduce((r, element, index) => {
      index % limit === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, [])
    .map(content => (
      <Grid container justify="center" spacing={16} key={content[0]["key"]}>
        {content}
      </Grid>
    ));

  const handleClick = clickedOffset => {
    console.log(clickedOffset / limit);
    setIndex(clickedOffset / limit);
  };

  const handleChangeIndex = index => {
    setIndex(index);
  };

  return (
    <div>
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        slideClassName={classes.grids}
        enableMouseEvents={true}
      >
        {cards}
      </SwipeableViews>
      <Pagination
        limit={limit}
        offset={index * limit}
        total={total}
        onClick={(e, clickedOffset) => handleClick(clickedOffset)}
      />
    </div>
  );
}

export default withStyles(styles)(CardHolder);
