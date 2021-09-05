import "./tailwind.output.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import DrugDetails from "./components/DrugDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Redirect exact path="/" to="/drugs/search" />
        <Route path={"/drugs/search"} component={SearchContainer} />
        <Route path={"/drugs/:name"} component={DrugDetails} />
      </Switch>
    </Router>
  );
}

export default App;
