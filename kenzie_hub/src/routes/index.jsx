import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { useState, useEffect } from "react";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:user")) || {}
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  useEffect(() => {
    if (token) {
      return setAuthenticated(true);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setToken={setToken}
          setUser={setUser}
        />
      </Route>

      <Route exact path="/Register">
        <Register authenticated={authenticated} />
      </Route>

      <Route exact path="/Home">
        <Home
          authenticated={authenticated}
          setToken={setToken}
          setUser={setUser}
          token={token}
          user={user}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
