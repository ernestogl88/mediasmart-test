import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    padding: "10px",
    [theme.breakpoints.up("sm")]: {
      padding: "20px"
    },
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(100, 100, 100, 0.15)"
    // padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
    //   .spacing.unit * 3}px`
  },
  media: {
    height: "40vh",
    maxWidth: "80%",
    [theme.breakpoints.up("sm")]: {
      height: "60vh"
    },
    padding: "1vh"
  },
  name: {
    textTransform: "uppercase",
    padding: "20px 0"
    // width: '9%'
  },
  age: {
    textTransform: "uppercase",
    padding: "20px 0"
  },
  bio: {
    textAlign: "justify",
    lineHeight: "30px",
    width: "100%"
  }
});

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Paper className={this.props.classes.paper}>
          <img
            className={this.props.classes.media}
            src={this.props.location.state.image}
            title={this.props.location.state.name}
            alt="#"
          />

          <Typography
            component="h4"
            variant="title"
            className={this.props.classes.name}
          >
            {this.props.location.state.name}
          </Typography>
          <Typography
            className={this.props.classes.age}
            component="h3"
            variant="title"
            color="textSecondary"
          >
            {this.props.location.state.age} years old
          </Typography>

          <Typography
            component="p"
            variant="subheading"
            className={this.props.classes.bio}
          >
            {this.props.location.state.bio}
          </Typography>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Profile);
