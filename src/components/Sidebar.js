import { useState } from "react";

function Sidebar(props) {
  return (
    <>
      <div className="logo">
        <a href="#">
          Brand<b>Colors</b>
        </a>
      </div>
      <div className="description">
        The biggest collection of official brand color codes around.Created by
        Me and friends.
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="#"> About BrandColors</a>
          </li>
        </ul>
      </nav>
      
    </>
  );
}

export default Sidebar;
