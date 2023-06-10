import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Notes from "./components/Notes";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import AddNote from "./components/AddNote";
import UpdateNote from "./components/UpdateNote";
import PrivateComponent from "./components/PrivateComponent";
import SingleNote from "./components/SingleNote";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="notes" element={<PrivateComponent />}>
          <Route path="" element={<Notes />} />
          <Route path="view/:id" element={<SingleNote />} />
          <Route path="update/:id" element={<UpdateNote />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
