import styled from 'styled-components'
export const Style = styled.div`
    background-color: var(--first-color);
    height: var(--height-header);
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--mb-2);
    .logo {
        font-size: 2.5em;
        text-decoration: none;
        color: #000;
    }
    .nav {
        display: flex;
        a {
            text-decoration: none;
            margin-left: 1.25rem;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--title-color);
            transition: 0.2s;
            &:hover {
                color: black;
            }
        }
    }
`
