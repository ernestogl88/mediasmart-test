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
      image_url: props.image
    };
  }

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardActionArea>
          <CardMedia
            className={this.props.classes.media}
            image={this.state.image_url}
            title={this.state.name}
          />
          <CardContent className={this.props.classes.cardContentHeigth}>
            <Typography gutterBottom variant="headline" noWrap={true}>
              {this.state.name}
            </Typography>
            <Typography component='h3' variant="h3">{this.state.age}</Typography>
            {/* <Typography component="p" noWrap={true}>
              {this.state.bio}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(WorkerLittle);
