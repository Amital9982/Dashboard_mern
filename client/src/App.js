import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import AddProducts from "./components/AddProducts";
import Productlist from "./components/Productlist";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/productlist" element={<Productlist />} />
            <Route path="/add" element={<AddProducts />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>You Logged Out</h1>} />
            <Route path="/profile" element={<h1>Your Profile</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
