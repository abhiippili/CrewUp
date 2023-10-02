import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { LocationContext } from "./contexts/LocationContext";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import NavBar from "./components/Navigation/NavBar";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import MyPortfolio from "./pages/MyPortfolio";
import PostTask from "./pages/PostTask";
import Tasks from "./pages/Tasks";
import Portfolios from "./pages/Portfolios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "./api/usersApi";
import MyTasks from "./pages/MyTasks";
import Settings from "./pages/Settings";

function App() {
  const [user, setUser] = useState(null);
  const [myLocation, setMyLocation] = useState(null);

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={{ user, setUser }}>
          <LocationContext.Provider value={{ myLocation, setMyLocation }}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/myprofile" element={<Profile />}></Route>
              <Route path="/posttask" element={<PostTask />}></Route>
              <Route path="/mytasks" element={<MyTasks />}></Route>
              <Route path="/myportfolio" element={<MyPortfolio />}></Route>
              <Route path="/myprofile/edit" element={<Settings />}></Route>
              <Route path="/posttask" element={<PostTask />}></Route>
              <Route path="/tasks" element={<Tasks />}></Route>
              <Route path="/portfolios" element={<Portfolios />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </LocationContext.Provider>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
