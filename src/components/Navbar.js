import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  alpha,
  InputBase,
  Badge,
  Avatar,
  IconButton,
} from "@material-ui/core";
import {
  Search,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  Cancel as CancelIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: ({ open }) => (open ? "flex" : "none"),
    },
  },
  input: {
    color: "white",
    width: "100%",
    margin: theme.spacing(0, 0, 0, 2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    display: ({ open }) => (open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          LARGELOGO
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          SmLogo
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search" className={classes.input}></InputBase>
          <IconButton
            className={classes.cancel}
            onClick={() => setOpen(false)}
            color="inherit"
          >
            <CancelIcon />
          </IconButton>
        </div>
        <div className={classes.icons}>
          <IconButton
            onClick={() => setOpen((prev) => !prev)}
            color="inherit"
            edge="start"
          >
            <Search className={classes.searchButton} />
          </IconButton>
          <Badge color="secondary" badgeContent={3} className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={5} className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar alt="ismail" src="https://source.unsplash.com/random" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
