import { IconType } from "react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHomeSmileLine } from "react-icons/ri";
import {FaHouseUser } from "react-icons/fa";
import { FcBiotech, FcMoneyTransfer, FcSettings } from "react-icons/fc";


export interface ILink{
    id:number;
    href:string;
    icon:IconType;
    text:string;
}

export const SidebarLinks:ILink[]=[
    {   
        id:1,
        href:"/",
        icon:MdSpaceDashboard,
        text: "Dashboard"
    },
    {
        id:2,
        href:"/houses",
        icon:RiHomeSmileLine,
        text: "Property"
    },
    {
        id:3,
        href:"/tenants",
        icon:FaHouseUser,
        text: "My Tenants"
    },
    {   
        id:4,
        href:"/analytics",
        icon:FcBiotech,
        text: "Analytics"
    },
    {
        id:5,
        href:"/account",
        icon:FcMoneyTransfer,
        text: "Payments"
    },
    {
        id:6,
        href:"/services",
        icon:FcSettings,
        text: "Services"
    },

]