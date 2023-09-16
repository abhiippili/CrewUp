import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import NavBar from "./components/Navigation/NavBar";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import MyContracts from "./pages/MyContracts";
import MyPortfolio from "./pages/MyPortfolio";
import PostTask from "./pages/PostTask";
import Tasks from "./pages/Tasks";
import Portfolios from "./pages/Portfolios";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/myprofile" element={<Profile />}></Route>
          <Route path="/mycontracts" element={<MyContracts />}></Route>
          <Route path="/myportfolio" element={<MyPortfolio />}></Route>
          <Route path="/posttask" element={<PostTask />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/portfolios" element={<Portfolios />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
