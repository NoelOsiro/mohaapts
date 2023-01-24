import { IconType } from "react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHomeSmileLine } from "react-icons/ri";
import {FaHouseUser } from "react-icons/fa";
import { FcBiotech, FcMoneyTransfer, FcSettings } from "react-icons/fc";


export interface ILink{
    href:string;
    icon:IconType;
    text:string;
}

export const SidebarLinks:ILink[]=[
    {
        href:"#",
        icon:MdSpaceDashboard,
        text: "Dashboard"
    },
    {
        href:"#",
        icon:RiHomeSmileLine,
        text: "Property"
    },
    {
        href:"#",
        icon:FaHouseUser,
        text: "My Tenants"
    },
    {
        href:"#",
        icon:FcBiotech,
        text: "Analytics"
    },
    {
        href:"#",
        icon:FcMoneyTransfer,
        text: "Payments"
    },
    {
        href:"#",
        icon:FcSettings,
        text: "Services"
    },

]