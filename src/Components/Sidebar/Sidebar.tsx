import React, { useState, useEffect } from "react";

import { FcBiotech } from "react-icons/fc";
import { SiHomeassistant } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHomeSmileLine } from "react-icons/ri";
import { FaCreditCard, FaHouseUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import scrollreveal from "scrollreveal";
import { Brand, LinkDiv, LinksList, ListItem, LogoutBtn, Section, Toggle, Top } from "./sidebarStyles";
import { SidebarLinks, ILink } from './Links';


const Sidebar = () => {

  return (
    <>
      <Section>
        <Top>
          <Brand>
            <SiHomeassistant />
            <span>Moha Homes</span>
          </Brand>
          <Toggle></Toggle>
          <LinkDiv>
            <LinksList>
              {SidebarLinks.map((link: ILink) => (
                <ListItem>
                  <a href={link.href}>
                    <link.icon/>
                    <span>{link.text}</span>
                  </a>
                </ListItem>
              ))}
            </LinksList>
          </LinkDiv>
        </Top>
        <LogoutBtn>
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </LogoutBtn>
      </Section>
    </>
  );
}

export default Sidebar;


