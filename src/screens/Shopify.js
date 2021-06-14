import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";

import barkShop from "./images/shopify.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  skillsArea: {
    padding: theme.spacing(3),
    marginBottom: 20,
    textAlign: "center",
    height: 400,
    color: theme.palette.text.secondary,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  media: {
    height: 300,
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  skillSet: {
    marginTop: 20,
  },
  skillContentArea: {
    marginTop: 10,
  },
  skillSetItems: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#ffeb3b",
    padding: 15,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsBackend: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#bdbdbd",
    padding: 15,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsDevOps: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#81d4fa",
    padding: 15,
    fontsize: 20,
    fontWeight: "bold",
  },
  skillSetItemsShopify: {
    border: "none",
    borderRadius: 50,
    color: theme.palette.textColor.dark,
    backgroundColor: "#a5d6a7",
    padding: 15,
    fontsize: 20,
    fontWeight: "bold",
  },
  cover: {
    width: 151,
  },
  subtitle: {
    marginTop: 5,
    fontStyle: "italic",
    fontSize: 18,
  },
  cardActions: {},
  actionIcon: {
    marginLeft: "auto",
  },
}));

const Shopify = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={12} className={classes.title}>
          <Typography variant="h4" color="secondary">
            Recent Shopify projects
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={barkShop}
                title="E-portal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Bark delights
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An online store for selling pet foods, toys and supplies.{" "}
                  <span>Store password is "flauts"</span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <Button variant="contained" size="small" color="primary">
                Shopify
              </Button>
              <IconButton
                aria-label="view"
                className={classes.actionIcon}
                href="https://bark-delights.myshopify.com/"
                target="_blank"
              >
                <LaunchIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Shopify);
