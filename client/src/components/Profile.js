import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  main: {
    width: "70vw",
    //display: "block",
    // marginTop: 60,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    // marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(100, 100, 100, 0.15)",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  media: {
    //flexGrow: .3,
    height: "60vh",
    // maxWidth: "50vw",
    padding: "1vh"
  },
  textInfo: {
    width: "90vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  age: {
    textTransform: "uppercase",
    padding: "20px 0"
  },
  bio: {
    textAlign: "justify"
  },
  upperDiv:{
    display: 'flex',

  }
});

class Profile extends Component {
  render() {
    return (
      <main className={this.props.classes.main}>
        <CssBaseline />
        <Paper className={this.props.classes.paper}>
          <div className={this.props.classes.upperDiv}>
            <img
              className={this.props.classes.media}
              src={this.props.location.state.image}
              title={this.props.location.state.name}
              alt="#"
            />
            <Typography component="header" variant="headline">
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
          </div>

          <div className={this.props.classes.textInfo}>
            <Typography
              component="p"
              variant="subheading"
              className={this.props.classes.bio}
            >
              {this.props.location.state.bio}
            </Typography>
          </div>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Profile);
