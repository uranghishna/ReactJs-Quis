import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import ModalPage from "./pages/ModalPage";
import Form from "./pages/Form";
import Animasi from "./pages/Animasi";
import Quiz from "./pages/Quiz";
import QuizSummary from "./pages/QuizSummary";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {

  return(
    <div>
      <Router>
      <div>
        <NavbarComp />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
          <Route exact path="/modalpage">
            <ModalPage />
          </Route>
          <Route exact path="/form" component={Form} />
          <Route exact path="/animasi" component={Animasi} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/summary" component={QuizSummary} />
        </Switch>
      </div>
    </Router>
    <Footer />
    </div>
  );
};

export default App;

