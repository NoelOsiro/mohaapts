import React, { useState } from "react";

import { SiHomeassistant } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";
import { Brand, LinkDiv, LinksList, ListItem, LogoutBtn, Section, Toggle, Top } from "./sidebarStyles";
import { SidebarLinks, ILink } from './Links';


const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1)
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
                <ListItem key={link.id} className={currentLink === link.id ? "active" : ""}
                onClick={() => setCurrentLink(link.id)}>
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
          <a href="/logout">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </LogoutBtn>
      </Section>
    </>
  );
}

export default Sidebar;


