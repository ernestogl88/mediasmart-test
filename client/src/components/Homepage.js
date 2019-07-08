import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import WeedsGrid from "./WeedsGrid";
import Typography from "@material-ui/core/Typography";

const styles = {
  itemsContainer: {
    marginTop: "7vh",
    marginBottom: "7vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  item: {
    width: "300px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage:{
    width: '50%',
    marginBottom: '3vh'
  },
  boldSpan: {
    fontWeight: "bolder"
    // color: "white"
  }
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    // this.strainservice = new StrainsService();
    this.state = {
      strains: []
    };
    this.getStrains();
  }



  render() {
    return (

        <WeedsGrid
          user={this.props.user}
          strains={this.state.strains}
          getUser={this.props.getUser}
        />
    );
  }
}
export default withStyles(styles)(Homepage);
