import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/landingPage/LandingPage";
import LoginPage from "./components/login/LoginPage";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { getAllUsers, getUser, logout } from "./apis/api";

function App() {
  // const token =
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI4YzQ2NzJkNTNhNTFjNWM1NWFlMzAiLCJpYXQiOjE2MDU5NTc3ODJ9.a1YRnLwCF8vnGoimle7MeH_FWomY-ehMPRpUi6hlvXk";
  // useEffect(() => {
  //   const printUsers = async () => {
  //     // const users = await getAllUsers(token);
  //     // const user = await getUser(token);
  //     const user2 = await logout(token);
  //     console.log(user2);
  //   };
  //   printUsers();
  // }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login/:userType" component={LoginPage} />
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
