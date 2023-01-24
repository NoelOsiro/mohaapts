import styled from "styled-components";

export const Section = styled.section`
    position: fixed;
    left: 0;
    background-color: #212121;
    height: 100vh;
    width: 18vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        position: initial;
        width: 100%;
        height: max-content;
        padding: 1rem;
    }
`;

export const Toggle = styled.div`
    display:none
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        display: block;
        color: white;
        z-index: 99;
        svg {
            font-size: 1.4rem;
        }
     }
`
export const Brand = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    svg {
        color: #ffc107;
        font-size: 2rem;
    }
    span {
        font-size: 2.2rem;
        color: #ffc107;
        font-family: 'Teko', sans-serif;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        gap: 1rem;
        justify-content: flex-start;
    }
`
export const LinkDiv = styled.div`
    display: flex;
    justify-content: center; 
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        display:none;
    } 
    
`
export const LinksList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const ListItem = styled.li`
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
    &:hover {
        background-color: #ffc107;
    a {
        color: black;
    }
    }
    a {
        text-decoration: none;
        display: flex;
        gap: 1rem;
        color: white;
    }
    svg{
        font-size:24px;
    }
    span {
        font-size: 20px;
        }
    .active {
        background-color: #ffc107;
        a {
        color: black;
        }
    }
`
export const LogoutBtn = styled.div`
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        display:none;
    }
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  
@media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
`
