import React from "react";
import styled from "styled-components";
import { CardLists } from "../../Components/Cards/CardLists";
import DataCard from "../../Components/Cards/Card";




export default function DashAnalytics() {
  return (
    <Section>
      {CardLists.map((card)=>(
        <DataCard title={card.title} key={card.title}
        amount={card.amount} icon={card.icon}/>
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

