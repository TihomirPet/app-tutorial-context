import React from 'react';
import { NavLink} from 'react-router-dom';


export default function Header({text}) {

  return (
    <div>
      <h3>{text}</h3>

      <nav className="main-navigation">
        <NavLink  to="/" activeclassname="active">
          Start
        </NavLink>

        <NavLink to="/about" activeclassname="active">
         about
        </NavLink>
        <NavLink to="/post" activeclassname="active">
         post
        </NavLink>
      </nav>
    </div>
  );
}
 