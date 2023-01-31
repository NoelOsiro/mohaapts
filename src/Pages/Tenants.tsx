import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from "recharts";
import { css } from "styled-components";

const cardStyles = css`
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 1rem;
  background-color: #212121;
  color: white;
`;


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
    <Section>
      
      <Title>
            <span>Occupancy</span>
      </Title>
      <Key>
      <div>{Math.round((120/140) *100)}%</div>
        <Span>120</Span>
        <SpanV>20</SpanV>
      </Key>
      <PieChart width={400} height={400}>
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
    </Section>
  );
}

export default Tenants;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;
const Title= styled.div`
  background-color: #d7e41e1d;
  width: 40%;
  text-align: center;
  margin: auto;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: 0.3s ease-in-out;
  font-size: 24px;
  &:hover {
    background-color: #ffc107;
    span {
      color: black;
    }
  }
  span {
    color: #ffc107;
  }
`
const Key = styled.div`
  text-align: center;
  font-size: 2rem;
`
const Span = styled.span`
  color:#04fa39;

`
const SpanV = styled.span`
  color:#ffc107;
  margin-left: 20px;
`