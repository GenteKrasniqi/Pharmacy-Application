import { Routes as Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'

const Routes = () => {
    return (
        <Switch>
           <Route path="/"  element={<Home/>}/>
           <Route path="/dashboard"  element={<Dashboard/>} />
        </Switch>        
    );
}

export default Routes;