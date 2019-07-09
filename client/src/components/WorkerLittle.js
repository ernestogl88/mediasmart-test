import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 350,
    height: 500,
    margin: 15
  },
  media: {
    height: 380
  },
  cardContentHeigth: {
    height: 120
  },
  noDecoration: {
    textDecoration: "none",
    color: "inherit"
  }
};

class WorkerLittle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      bio: props.bio,
      name: props.name,
      age: props.age,
      image: props.image
    };
  }

  render() {
    return (
      <Link
        className={this.props.classes.noDecoration}
        to={{
          pathname: `/profile/`,
          state: {
            id: this.state.id,
            bio: this.state.bio,
            name: this.state.name,
            age: this.state.age,
            image: this.state.image
          }
        }}
      >
        <Card className={this.props.classes.card}>
          <CardActionArea>
            <CardMedia
              className={this.props.classes.media}
              image={this.state.image}
              title={this.state.name}
            />
            <CardContent className={this.props.classes.cardContentHeigth}>
              <Typography variant="headline" noWrap={true}>
                {this.state.name}
              </Typography>
              <Typography component="h3" variant="h3">
                {this.state.age}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }
}

export default withStyles(styles)(WorkerLittle);
