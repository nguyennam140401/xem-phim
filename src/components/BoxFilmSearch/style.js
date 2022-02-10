import styled from 'styled-components'
export const Style = styled.div`
    a {
        display: flex;
        margin-bottom: var(--mb-1);
        text-decoration: none;
        .bx-img {
            width: 70px;
            min-width: 70px;
            height: 70px;
        }
        p {
            margin-left: var(--mb-1);
            font-size: 1.25rem;
            transition: 0.2s;
        }
        &:hover {
            p {
                color: var(--first-color-alt);
            }
        }
    }
`
