import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import CharacterSheetForm from "./CharacterSheetForm";

const ApplicationViews = () => {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <Switch>
      <Route path="/home" exact>
        {isLoggedIn ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route path="/form" exact>
        {isLoggedIn ? <CharacterSheetForm /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;