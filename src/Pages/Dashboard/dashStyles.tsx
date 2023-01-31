import styled from "styled-components";

export const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
`
export const Row1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 50%;
    gap: 1rem;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        grid-template-columns: 1fr;
    }
`
export const Row2 = styled.div`
    display: block;
    /* grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    height: 50%;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        grid-template-columns: 1fr;
    } */
`
export const Row3 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: 50%;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        grid-template-columns: 1fr;
    }
`