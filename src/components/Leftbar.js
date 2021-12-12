import { makeStyles, Container, Typography } from "@material-ui/core";
import { Home as HomeIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
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
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  const rendered = [1, 2, 3, 4, 5, 6];
  return (
    <Container className={classes.container}>
      {rendered.map((item) => {
        return (
          <div key={item} className={classes.item}>
            <HomeIcon className={classes.icon} />
            <Typography className={classes.text}>Homepage</Typography>
          </div>
        );
      })}
    </Container>
  );
};

export default Leftbar;
