import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Route,
  Switch,
} from "react-router-dom";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactsIcon from "@material-ui/icons/Contacts";
import DescriptionIcon from "@material-ui/icons/Description";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import Avatar from "@material-ui/core/Avatar";
import AboutMe from "./screens/AboutMe";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import Shopify from "./screens/Shopify";
import Contact from "./screens/Contact";
import Blog from "./screens/Blog";
import Tutorial from "./screens/Tutorial";
import Resources from "./screens/Resources";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        codewithbob.tech
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    marginLeft: 15,
    color: theme.palette.secondary.main,
    backgroundColor: "#424242",
    fontSize: 20,
    fontWeight: "bold",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 30,
    marginRight: 30,
    height: 600,
    padding: 20,
  },
  itemList: {
    fontWeight: 600,
  },
  profilSize: {
    width: 150,
    height: 150,
  },
  nameContainer: {
    marginTop: 20,
    textAlign: "center",
  },
  mainName: {
    fontSize: 25,
  },
  jobTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  socialIcons: {
    color: theme.palette.primary.main,
  },
  contentDivider: {
    marginTop: 15,
    marginBottom: 15,
  },
}));

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#ffcc00",
      color: "black",
      "& .MuiListItemIcon-root": {
        color: "black",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#ffc107",
      color: "black",
      "& .MuiListItemIcon-root": {
        color: "black",
      },
    },
  },
  selected: {},
})(MuiListItem);

const App = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Avatar className={classes.title}>BO</Avatar>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.itemList}>
            <div>
              <ListItem
                button
                component={RouterLink}
                to="/"
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                className={classes.itemListItem}
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="About Me" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/skills"
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="My Skills" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/projects"
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemIcon>
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/shopify"
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <ShoppingBasketIcon />
                </ListItemIcon>
                <ListItemText primary="Shopify" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/contact"
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
              >
                <ListItemIcon>
                  <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </div>
          </List>
          <Divider />
          <List>
            {" "}
            <div>
              <ListSubheader inset>Other Info</ListSubheader>
              <ListItem
                button
                component={RouterLink}
                to="/blog"
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)}
              >
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/tutorial"
                selected={selectedIndex === 6}
                onClick={(event) => handleListItemClick(event, 6)}
              >
                <ListItemIcon>
                  <KeyboardIcon />
                </ListItemIcon>
                <ListItemText primary="Tutorials" />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/resources"
                selected={selectedIndex === 7}
                onClick={(event) => handleListItemClick(event, 7)}
              >
                <ListItemIcon>
                  <FolderSpecialIcon />
                </ListItemIcon>
                <ListItemText primary="Resources" />
              </ListItem>
            </div>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Profile Area */}
              <Grid item xs={12} md={12} lg={12}>
                <Switch>
                  <Route exact path="/" component={AboutMe} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/shopify" component={Shopify} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/tutorial" component={Tutorial} />
                  <Route exact path="/resources" component={Resources} />
                </Switch>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </Router>
  );
};

export default App;