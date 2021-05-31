import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    color: "indigo",
    width: "100px",
    padding: "12px",
    margin: "6px",
    backgroundColor: "lavender",
    textDecoration: "none"
  }

  return (
    <div className="navbar">{/*{code here}*/}
      <NavLink to="/" style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/movies" style={linkStyles}>
        Movies
      </NavLink>
      <NavLink to="/actors" style={linkStyles}>
        Actors
      </NavLink>
      <NavLink to="/directors" style={linkStyles}>
        Directors
      </NavLink>
    </div>
  );
}

export default NavBar;
