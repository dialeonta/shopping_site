import { NavLink } from "react-router-dom"
function NavBar () {
  const activeLink = "underline text-violet-700 underline-offset-4"
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-2">
        <li className="font-semibold text-lg">
          <NavLink to="/">
            Shoppi
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? activeLink : ""
            }
            to="/all">
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? activeLink : ""
            }
            to="/clothes">
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? activeLink : ""
            }
            to="/electronics">
            Electronics
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-2 font-bold">
        <li className="text-black/60">
          dialeonta@gmail.com
        </li>
        <li>
          <NavLink 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? activeLink : ""
            }
            to="/my-account">
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? activeLink : ""
            }
            to="/my-order">
            My Order
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? activeLink : ""
            }
            to="/sing-in">
            Sing In
          </NavLink>
        </li>
        <li>
          🛒0
        </li>
      </ul>
    </nav>
  )
}

export default NavBar