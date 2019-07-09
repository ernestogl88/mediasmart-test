import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Service from "./services/Service";
import Navbar from "./components/Navbar";
import WorkersGrid from "./components/WorkersGrid";
import Profile from "./components/Profile";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { workers: [] };
    this.service = new Service();
  }

  componentWillMount() {
    this.getWorkers();
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
            <Switch>
              <Route
                exact
                path="/profile"
                render={props => (
                  <Profile
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/"
                render={props => (
                  <WorkersGrid workers={this.state.workers} />
                )}
              />
            </Switch>
            
          </div>
        </CssBaseline>
      </BrowserRouter>
    );
  }
}

export default App;
