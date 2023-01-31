import React from "react";
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