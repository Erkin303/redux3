import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboards from "./components/pages/Dashboards";
import Home from "./components/pages/Home";
import store from "./components/redux/store";
import './App.css'


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/dashboard/:menu" exact><Dashboards></Dashboards></Route>
          </Switch>

        </div>
      </Provider>
    </Router>

  );
}

export default App;
