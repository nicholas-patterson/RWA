import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h4" color="inherit" data-testid="site-title">
            React Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
