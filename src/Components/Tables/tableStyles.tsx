import styled from "styled-components";
import { css } from "styled-components";
const cardStyles = css`
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 1rem;
  background-color: #212121;
  color: white;
`;
export const Section = styled.section`
  display: block;
`;

export const SectionHeader = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 24px;
  color:white;
  font-family: 'Teko';
`
export const Table = styled.table`
  background-color:#212121;
  width: 100%;
`
export const Thead= styled.thead`
  color:white;
`
export const TheadRow= styled.th`
  padding: 10px;
  border-bottom: solid 2px #ffc107;
`
export const TBody= styled.tbody`
  color:white;
  text-align:center;
`
export const TData = styled.td`
  padding: 10px;
  border-top: none;
  border: solid 1px gray;
  &:hover{
    background-color: #ffc107;
    color:black;
  }
`
export const Sectionpie = styled.section`
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
export const Titlepie= styled.div`
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
export const Keypie = styled.div`
  text-align: center;
  font-size: 2rem;
`
export const Spanpie = styled.span`
  color:#04fa39;

`
export const SpanVpie = styled.span`
  color:#ffc107;
  margin-left: 20px;
`

