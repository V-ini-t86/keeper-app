import Content from "./Components/Content/Content";
import Navbar from "./Components/Navigation/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthContext";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Navbar />
        </AuthProvider>
        <hr style={{ border: "5px solid black" }} />
        <div className="body">
          <SideBar />
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default App;
