import React from "react";
import { useFetch } from "./hooks";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  media: {
    height: 400
  }
});

export default function MediaCard() {
  const [data, loading] = useFetch("https://dog.ceo/api/breeds/image/random");
  function fetched(e) {
    window.location.reload();
  }
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.message}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={fetched}>
          Reload
        </Button>
      </CardActions>
    </Card>
  );
}
