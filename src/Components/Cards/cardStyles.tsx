import styled, { css } from "styled-components";

const cardStyles = css`
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 1rem;
  background-color: #212121;
  color: white;
`;

export const Analytic = styled.div`
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 2.0rem;
      }
    }
    @media screen and (min-width: 280px) and (max-width: 720px) {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
`