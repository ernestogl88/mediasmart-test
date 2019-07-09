import React from "react";
import "./App.css";
import Service from "./services/Service";
import Navbar from "./components/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import WorkersGrid from "./components/WorkersGrid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { workers: [] };
    this.service = new Service();
  }

  componentWillMount(){
    this.getWorkers()
  }

  getWorkers() {
    this.service.getWorkers().then(workers => {
      this.setState({
        ...this.state,
        workers: workers
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <CssBaseline>
          <div className="App">
            <Navbar />
            <WorkersGrid workers={this.state.workers} />
          </div>
        </CssBaseline>
      </BrowserRouter>
    );
  }
}

export default App;
