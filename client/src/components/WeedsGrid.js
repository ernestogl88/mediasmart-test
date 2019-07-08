import React, { Component } from "react";
import StrainLittle from "./StrainLittle";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme();

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    marginTop: "1vh",
    height: "80vh",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  paginator: {
    marginTop: "1vh"
  }
};

class WeedsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWorkers: [],
      workers: [],
      offset: 0,
      allWorkersNumber: 0
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     ...this.state,
  //     allWorkers: this.props.workers,
  //     workers: this.props.workers.slice(
  //       this.state.offset,
  //       this.state.offset + 10
  //     ),
  //     allWorkersNumber: this.props.workers.length
  //   });
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.workers !== nextProps.workers) {
  //     this.setState({
  //       ...this.state,
  //       allWorkers: nextProps.workers,
  //       workers: nextProps.workers.slice(
  //         this.state.offset,
  //         this.state.offset + 10
  //       ),
  //       allWorkersNumber: nextProps.workers.length
  //     });
  //   }
  // }
  // handleClick(offset) {
  //   this.setState({
  //     ...this.state,
  //     workers: this.state.allWorkers.slice(offset, offset + 10),
  //     offset
  //   });
  // }

  render() {
    console.log(this.state.allWorkers)
    return (
      <div className={this.props.classes.main}>
        {/* <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Pagination
            size="large"
            className={this.props.classes.paginator}
            limit={10}
            offset={this.state.offset}
            total={this.state.allWorkersNumber}
            onClick={(e, offset) => this.handleClick(offset)}
          />
        </MuiThemeProvider> */}

        <div className={this.props.classes.container}>
          {this.state.workers.map(worker => {
            return (
              <div key={worker._id}>
                <StrainLittle {...worker} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(WeedsGrid);
