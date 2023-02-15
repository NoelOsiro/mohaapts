import React from "react";
import { BiSearch } from "react-icons/bi";
import { Nav, Search, Title } from "./navStyles";
interface Iprops{
  title:string
}

const Navbar=(props:Iprops)=> {
  return (
    <Nav>
      <Title className="title">
        <h4>Hi Noel,</h4>
        <h1>
          <span>{props.title}</span>
        </h1>
      </Title>
      <Search>
        <BiSearch />
        <input type="text" placeholder="Search" />
      </Search>
    </Nav>
  );
}
export default Navbar;
