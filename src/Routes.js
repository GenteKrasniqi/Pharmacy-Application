import { Routes as Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import About from "./pages/About";

const Routes = () => {
    return (
        <Switch>
           <Route path="/"  element={<Home/>}/>
           <Route path="/About"  element={<About/>}/>
           <Route path="/dashboard"  element={<Dashboard/>} />
        </Switch>        
    );
}

export default Routes;