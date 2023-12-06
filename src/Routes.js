import { Routes as Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from "./pages/Products";
import Dashboard from './pages/Dashboard'
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
    return (
        <Switch>
           <Route path="/"  element={<Home/>}/>
           <Route path="/About"  element={<About/>}/>
           <Route path="/dashboard"  element={<Dashboard/>} />
           <Route path="/products" element={<Products />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />

        </Switch>        
    );
}

export default Routes;