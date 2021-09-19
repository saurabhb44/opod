import "./App.css";
import Main from "./components/main";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import WhatWeDo from "./components/whatWeDo/whatWeDo";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Main} />
        <Route path={"/about"} exact component={WhatWeDo} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
