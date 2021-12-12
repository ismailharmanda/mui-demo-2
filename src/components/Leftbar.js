import { makeStyles, Container, Typography } from "@material-ui/core";
import {
  Home,
  Person,
  List,
  PlayCircleOutline,
  TabletMac,
  Bookmark,
  Storefront,
  Settings,
  ExitToApp,
  Camera,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: { fontSize: "18px" },
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  const LeftNavList = [
    { name: "Homepage", icon: <Home className={classes.icon} /> },
    { name: "Lists", icon: <Person className={classes.icon} /> },
    { name: "Camera", icon: <List className={classes.icon} /> },
    { name: "Videos", icon: <PlayCircleOutline className={classes.icon} /> },
    { name: "Apps", icon: <TabletMac className={classes.icon} /> },
    { name: "Collections", icon: <Bookmark className={classes.icon} /> },
    { name: "Market Place", icon: <Storefront className={classes.icon} /> },
    { name: "Settings", icon: <Settings className={classes.icon} /> },
    { name: "Logout", icon: <ExitToApp className={classes.icon} /> },
  ];
  return (
    <Container className={classes.container}>
      {LeftNavList.map((item) => {
        return (
          <div key={item.name} className={classes.item}>
            {item.icon}
            <Typography className={classes.text}>{item.name}</Typography>
          </div>
        );
      })}
    </Container>
  );
};

export default Leftbar;
