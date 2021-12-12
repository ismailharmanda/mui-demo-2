import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      paddingTop: theme.spacing(10),
    },
  };
});

const Rightbar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Rightbar</Container>;
};

export default Rightbar;
