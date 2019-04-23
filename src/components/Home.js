import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import CardData from "../CardData.json";
import CardHolder from "./cards/CardHolder";
import SearchFilters from "./SearchFilters";

const styles = theme => ({
  cardHolder: {
    maxWidth: 1000,
    minHeight: 700,
    margin: "auto"
    // backgroundColor: theme.palette.secondary.main
  }
});

function Home(props) {
  const { classes } = props;
  const [currentSet, setCurrentSet] = useState("All");
  const [textFilter, setTextFilter] = useState("");

  const onSearchChanged = name => event => {
    setTextFilter(event.target.value);
  };

  const onSetFilterChanged = name => event => {
    setCurrentSet(event.target.value);
  };

  const filterCards = () => {
    let filteredCards = CardData.data.filter(card =>
      currentSet === "All" ? true : card["set"] === currentSet
    );
    filteredCards = filteredCards.filter(
      card =>
        card["set"].toLowerCase().includes(textFilter) ||
        card["name"].toLowerCase().includes(textFilter) ||
        card["text"].toLowerCase().includes(textFilter)
    );
    return filteredCards;
  };

  return (
    <div>
      <SearchFilters
        onSearchChanged={onSearchChanged}
        onSetFilterChanged={onSetFilterChanged}
        currentSet={currentSet}
      />
      <Paper className={classes.cardHolder}>
        <CardHolder cards={filterCards()} />
      </Paper>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
