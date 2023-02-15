import styled from "styled-components";
export const Row1 = styled.div`
    display: grid;
    height: 50%;
    gap: 1rem;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        grid-template-columns: 1fr;
    }
`