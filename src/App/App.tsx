import { Header } from "../components/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Main } from "../Main/Main";
import { FullPageAd } from "../pages/FullPageAd";

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route path="/gubagoo">
              <FullPageAd />
            </Route>
            <Route path="/live-person">
              <FullPageAd />
            </Route>
            <Route path="/live-person-2">
              <FullPageAd />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </Router>
    </div>
  );
};
