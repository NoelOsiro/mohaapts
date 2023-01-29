import styled from "styled-components";



export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column; 
  }
`;

export const Title = styled.div`
    h1 {
        span {
            color: #ffc107;
            font-family: 'Teko', sans-serif;
            font: bold;
            font-size:xx-large;
        }
    } 
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
`
export const Search = styled.div`
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
  `