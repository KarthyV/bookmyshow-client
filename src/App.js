import Navibar from "./components/Navbar";
import Home from "./components/pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import NotFound from "./components/pages/NotFound";
import ViewBooking from "./components/pages/ViewBooking";
import Streaming from "./components/pages/Streaming";
import AdminPage from "./components/pages/Admin/AdminPage";
import AddMovie from "./components/pages/Admin/AddMovie";
import EditMovie from "./components/pages/Admin/EditMovie";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Streaming />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add-movie" element={<AddMovie />} />
        <Route path="/admin/edit-movie/:id" element={<EditMovie />} />
        <Route path="/book/:id" element={<ViewBooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
