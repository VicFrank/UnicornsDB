import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import CardData from "../CardData.json";

const styles = theme => ({
  root: {
    maxWidth: 1000,
    margin: "auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: "15rem"
  }
});

function SearchFilters(props) {
  const { classes } = props;
  const cardsets = CardData["sets"];

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-search"
        label="Search..."
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={props.onSearchChanged()}
      />
      <TextField
        id="outlined-filter-cardset"
        select
        label="Filter By Set"
        className={classes.textField}
        value={props.currentSet}
        onChange={props.onSetFilterChanged()}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        margin="normal"
        variant="outlined"
      >
        {cardsets.map(set => (
          <MenuItem key={set} value={set}>
            {set}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default withStyles(styles)(SearchFilters);
