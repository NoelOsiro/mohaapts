import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { Nav, Search, Title } from "./navStyles";


export default function Navbar() {
  return (
    <Nav>
      <Title className="title">
        <h4>Hi Noel,</h4>
        <h1>
          <span>Dashboard</span>
        </h1>
      </Title>
      <Search>
        <BiSearch />
        <input type="text" placeholder="Search" />
      </Search>
    </Nav>
  );
}
