import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  main: {
    width: "70vw",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
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
    height: "40vh",
    [theme.breakpoints.up("sm")]: {
      height: "60vh"
    },
    padding: "1vh"
  },
  textInfo: {
    padding: "20px 0",
    width: "85vw"
  },
  age: {
    textTransform: "uppercase",
    padding: "20px 0"
  },
  bio: {
    textAlign: "justify",
    lineHeight: "30px"
  },
  upperDiv: {
    width: "85vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  upperText:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
            <div className={this.props.classes.upperText}>
              <Typography
                component="header"
                variant="headline"
                className={this.props.classes.age}
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
            </div>
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
