import './Layout.css';
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
      <>
      <div className='name'>Tracey Lum</div>
      <div className='main'>
        <nav id="nav">
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/Learning">learning</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">projects</NavLink>
            </li>
            <li>
              <NavLink to="/About">about</NavLink>
            </li>
          </ul>
        </nav>
        
        <Outlet />
        </div>
      </>
    );
  }
  
  export default Layout;