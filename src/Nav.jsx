import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  height: 30px;

  * {
    padding: 0;
    margin: 0;
  }
  .Nav {
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
  }
  .navH1 {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
  }
  .navList {
    list-style: none;
    display: flex;
    padding: 20px;
    color: white;
    gap: 20px;
  }
  .navList a {
    color: white;
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
    <div>
      <Navbar>
        <nav className="Nav">
          <h4 className="navH1">ActorReactApp</h4>
          <ul className="navList">
            <li className="links">
              <a href="#">Home</a>
            </li>
            <li className="links">
              <a href="#">About</a>
            </li>
            <li className="links">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </Navbar>
    </div>
  );
};

export default Nav;
