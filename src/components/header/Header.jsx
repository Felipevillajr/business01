import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  return (
    <section className="Header">
      <div>TEST BUSINESS LOGO</div>
      <h1>TEST BUSINESS</h1>
      <Dropdown>
        <Dropdown.Toggle variant="Primary" id="dropdown-basic-button">
          MENU
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">About</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Contact-Us</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Locations</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  );
}
