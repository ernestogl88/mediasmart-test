import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = {
  card: {
    width: 300,
    height: 340,
    margin: 15
  },
  media: {
    height: 140
  },
  upperCase: {
    textTransform: `uppercase`
  },
  noDecoration: {
    textDecoration: "none",
    color: "blue"
  },
  separateActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonsMargin: {
    padding: 7
  },
  cardContentHeigth: {
    height: 150
  }
};

class StrainLittle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      idStrain: props._id,
      description: props.description,
      name: props.name,
      race: props.race,
      image_url: props.image_url
    };
  }

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardActionArea>
          <CardMedia
            className={this.props.classes.media}
            image={this.state.image_url === "" ? Image : this.state.image_url}
            title={this.state.name}
          />
          <CardContent className={this.props.classes.cardContentHeigth}>
            <Typography variant="h5" component="h2">
              {this.state.name}
            </Typography>
            <Typography
              className={this.props.classes.upperCase}
              variant="subtitle1"
              color="textSecondary"
            >
              {this.state.race}
            </Typography>
            <Typography component="p" noWrap={true}>
              {this.state.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={this.props.classes.separateActions}>
          <Button
            className={this.props.classes.buttonsMargin}
            size="small"
            color="primary"
          >
            <Link
              className={this.props.classes.noDecoration}
              to={`/straindetail/${this.state.idStrain}`}
            >
              {" "}
              More details
            </Link>
          </Button>
          {this.props.user && this.props.user.strains !== undefined ? (
            <IconButton
              onClick={e => this.handlerFavoriteSubmit(e)}
              className={this.props.classes.buttonsMargin}
              aria-label="Add to favorites"
            >
              <FavoriteIcon
                color={
                  this.props.user.strains.includes(this.state.idStrain) ? "error" : "inherit"
                }
              />
            </IconButton>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(StrainLittle);
