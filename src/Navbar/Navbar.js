
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../User/Login/Login';
import Register from '../User/Register/Register';
import Admin from '../User/Admin/Admin';
function Navbar(){

    return (
        <>
        <BrowserRouter>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">ECommerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"></input>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

<Routes>
    <Route path="/login" element={<Login></Login>} />
    <Route path="/register" element={<Register></Register>} />
    <Route path="/admin" element={<Admin></Admin>} />
</Routes>

</BrowserRouter>
        </>
    )
 

}
export  default  Navbar;