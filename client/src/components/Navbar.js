import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Logo from "../img/favicon.ico";

const styles = {
  root: {
    flexGrow: 1,
    height: "10vh",
    justifyContent: "space-between"
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
  }
};

class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar className={this.props.classes.navBg}>
          <Toolbar className={this.props.classes.root}>
            <NavLink className={this.props.classes.grow} to="/">
              <img alt="Logo" src={Logo} />
            </NavLink>

            <Typography variant="h6" className={this.props.classes.grow}>
              <NavLink className={this.props.classes.noDecoration} to="/">
                Members
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Navbar));
