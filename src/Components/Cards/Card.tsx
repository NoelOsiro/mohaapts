import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { Analytic } from "./cardStyles";
import { ICard } from "./CardLists";


const DataCard =(props:ICard)=> {
    return (
        <Analytic>
            <div className="content">
                <h5>{props.title}</h5>
                <h2>{props.amount}</h2>
            </div>
            <div className="logo">
                <props.icon/>
            </div>
        </Analytic>
    );
}
export default DataCard;