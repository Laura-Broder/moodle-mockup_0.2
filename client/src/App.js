import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/landingPage/LandingPage";
import LoginPage from "./components/login/LoginPage";
import Footer from "./components/footer/Footer";
import TeacherDashboard from "./components/teacher/dashboard/TeacherDashboard";

function App() {
  const [userType, setUserType] = useState("teacher");

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage {...props} setUserType={setUserType} />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <LoginPage
                {...props}
                userType={userType}
                setUserType={setUserType}
              />
            )}
          />
          <Route exact path="/teacher/dashboard" component={TeacherDashboard} />
        </main>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
