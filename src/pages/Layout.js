import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">jj</Link>
          </li>
          <li>
            <Link to="/blogs">kk</Link>
          </li>
          <li>
            <Link to="/contact">ii</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;