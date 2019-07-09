import React, { Component } from "react";
import WorkerLittle from "./WorkerLittle";
import { withStyles } from "@material-ui/core/styles";
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

class WorkersGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWorkers: [],
      workers: [],
      offset: 0,
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      allWorkers: this.props.workers,
      workers: this.props.workers.slice(
        this.state.offset,
        this.state.offset + 8
      )
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workers !== nextProps.workers) {
      this.setState({
        ...this.state,
        allWorkers: nextProps.workers,
        workers: nextProps.workers.slice(
          this.state.offset,
          this.state.offset + 8
        )
      });
    }
  }
  handleClick(offset) {
    this.setState({
      ...this.state,
      workers: this.state.allWorkers.slice(offset, offset + 8),
      offset
    });
  }

  render() {
    return (
      <div className={this.props.classes.main}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Pagination
            size="large"
            className={this.props.classes.paginator}
            limit={8}
            offset={this.state.offset}
            total={this.state.allWorkers.length}
            onClick={(e, offset) => this.handleClick(offset)}
          />
        </MuiThemeProvider>

        <div className={this.props.classes.container}>
          {this.state.workers.map(worker => {
            return (
              <div key={worker.id}>
                <WorkerLittle {...worker} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(WorkersGrid);
