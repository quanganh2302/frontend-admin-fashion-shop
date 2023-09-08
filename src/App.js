import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import AddProduct from "./component/add-product/AddProduct";
import AddColor from "./component/add-color/AddColor";
import AddCategories from "./component/add-categories/AddCategories";
import AddImg from "./component/add-img/AddImg";
import HomeAdmin from "./homeAdmin/HomeAdmin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomeAdmin} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/add-product" Component={AddProduct} />
        <Route path="/add-color" Component={AddColor} />
        <Route path="/add-tag-categories" Component={AddCategories} />
        <Route path="/add-image" Component={AddImg} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
