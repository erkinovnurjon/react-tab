import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tab from "./Tab";
import Position from "./pages/Position";
import Neutral from "./pages/Neutral";
import Negative from "./pages/Negative";

import "./App.css"

const App = () => {
  return (
    <Router>
      <div>
        <Tab />
        <Routes>
          <Route exact path="/position" component={Position} />
          <Route exact path="/neutral" component={Neutral} />
          <Route exact path="/negative" component={Negative} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

