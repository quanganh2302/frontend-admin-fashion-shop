import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import AddProduct from "./component/add-product/AddProduct";
import HomeAdmin from "./homeAdmin/HomeAdmin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomeAdmin}/>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/add-product" Component={AddProduct} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
