import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebare.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCommentAlt,
  faUserPlus,
  faCog,
  faFileMedical,
  faList,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";

const Sidebare = ({ setTitle }) => {
  return (
    <div>
      <div className="sideBrand">
        <div className="sideBrnIcon">
          <FontAwesomeIcon icon={faBuffer} />
        </div>
        <h2>
          Scann <span className="navHighlight">Pass</span>
        </h2>
      </div>
      <nav id="sideNavbar">
        <ul>
          {/* <li>
            <NavLink
              onClick={() => setTitle("Profile")}
              activeclassname="activePage"
              exact
              to="/dashboard/profile"
            >
              <FontAwesomeIcon icon={faUserCircle} className="iconC" />
              Profile
            </NavLink>
          </li> */}

          <>
            {/* <li>
              <NavLink
                onClick={() => setTitle("Listes des employés")}
                activeclassname="activePage"
                to="/dashboard/employeeList"
              >
                <FontAwesomeIcon icon={faList} className="iconC" />
                List des employés
              </NavLink>
            </li> */}
            <li>
              <NavLink
                onClick={() => setTitle("Listes des visiteur")}
                activeclassname="activePage"
                to="/dayoboard/visiteurListe"
              >
                <FontAwesomeIcon icon={faList} className="iconC" />
                List des visiteur
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setTitle("ajouter un nouveaux visiteur")}
                activeclassname="activePage"
                to="/dayoboard/addVisiteur"
              >
                <FontAwesomeIcon icon={faFileMedical} className="iconC" />
                Ajouter un nouveau visiteur
              </NavLink>
            </li>
          </>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebare;
