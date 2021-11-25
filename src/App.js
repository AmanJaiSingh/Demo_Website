import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart, Shop, Diet } from "./components";

function App() {
  return (
    <div className="App bg-red-100">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/kitchen-jungle" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/Diet" exact component={Diet} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
