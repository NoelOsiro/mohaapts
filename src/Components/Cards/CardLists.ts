import { IconType } from "react-icons";
import { BiGroup } from "react-icons/bi";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FcPlanner, FcPositiveDynamic, FcSalesPerformance } from "react-icons/fc";
import { FiActivity } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { MdFiberNew } from "react-icons/md";

export interface ICard{
    title:string;
    amount:string;
    icon:IconType;

}
export const CardLists:ICard[]=[
    {   
        title:"Income this Month",
        amount:"Ksh 728,354",
        icon:FcPlanner,
    },
    {
        title:"Earnings",
        amount:"Ksh 728,354",
        icon:FcPositiveDynamic,
    },
    {
        title:"New Tenants",
        amount:"32",
        icon:MdFiberNew,
    },
    {   
        title:"Activity",
        amount:"Ksh 57,304",
        icon:FcSalesPerformance ,
    },
]