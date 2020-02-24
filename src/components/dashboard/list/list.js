import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useFetch } from "../listHook";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [data, loading] = useFetch("https://dog.ceo/api/breeds/list/all");
  let rows = [];
  for (var key in data.message) {
    rows.push(key);
    //console.log("Key: " + key);
    // console.log("Value: " + data.message[key]);
  }
  const styled = {
    textTransform: "capitalize"
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folder">
        {rows.map(keyed => {
          return (
            <ListItem button>
              <ListItemText style={styled} primary={keyed} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
