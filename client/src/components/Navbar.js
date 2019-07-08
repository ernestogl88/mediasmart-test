import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1,
    height: "10vh",
    justifyContent: 'center'
  },
  grow: {
    flexGrow: 1
  },
  noDecoration: {
    textDecoration: "none",
    color: "inherit"
  },
  navBg: {
    background: "rgba(255, 255, 255, 0.7)"
  },
};

class Navbar extends React.Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar positionSticky className={this.props.classes.navBg}>
          <Toolbar className={this.props.classes.root}>
            <Typography variant="h6">
              <NavLink className={this.props.classes.noDecoration} to="/">
                Home
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Navbar));
