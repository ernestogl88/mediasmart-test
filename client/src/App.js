import React from "react";
import "./App.css";
import Service from "./services/Service";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import WeedsGrid from "./components/WeedsGrid";

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
    console.log(this.state.workers)
    return (
      <BrowserRouter>
        <CssBaseline>
          <div className="App">
            <Navbar />
            <WeedsGrid workers={this.state.workers} />
          </div>
        </CssBaseline>
      </BrowserRouter>
    );
  }
}

export default App;
