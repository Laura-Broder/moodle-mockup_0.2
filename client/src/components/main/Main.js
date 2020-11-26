import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import LandingPage from "../landingPage/LandingPage";
import LoginPage from "../login/LoginPage";
import TeacherDashboard from "../teacher/dashboard/TeacherDashboard";
import { isUserLoggedIn } from "../../apis/usersApi";

const Main = () => {
  const [userType, setUserType] = useState("teacher");
  return (
    <main>
      {isUserLoggedIn() ? (
        <Redirect push exact to={`/${userType}/dashboard`} />
      ) : null}
      <Route
        exact
        path="/"
        render={(props) => <LandingPage {...props} setUserType={setUserType} />}
      />
      <Route
        exact
        path="/login"
        render={(props) => (
          <LoginPage {...props} userType={userType} setUserType={setUserType} />
        )}
      />
      <Route exact path="/teacher/dashboard" component={TeacherDashboard} />
    </main>
  );
};
export default Main;
