import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from "recharts";
import { Sectionpie, Titlepie, Keypie, Spanpie, SpanVpie } from "./tableStyles";

const data = [
  { name: "Occupied", value: 120 },
  { name: "Vacant", value: 20 },
];
const COLORS = ["#04fa39", "#ffc107", "#FF8042"];
let renderLabel = function(entry:any) {
  return entry.name;
}
const Tenants=() =>{
  return (
    <Sectionpie> 
      <Titlepie>
            <span>Occupancy</span>
      </Titlepie>
      <Keypie>
      <div>{Math.round((120/140) *100)}%</div>
        <Spanpie>120</Spanpie>
        <SpanVpie>20</SpanVpie>
      </Keypie>
      <PieChart width={400} height={400} style={{margin:"auto"}}>
      <Tooltip />
      <Legend verticalAlign="top" height={0}/>
      <Pie
        data={data}
        cx={180}
        cy={200}
        innerRadius={90}
        outerRadius={130}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={renderLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </Sectionpie>
  );
}
export default Tenants;

