import styled from 'styled-components'
export const Style = styled.div`
    .series {
        margin-bottom: var(--mb-2);
        h4 {
            font-size: 1.25rem;
            margin-bottom: var(--mb-1);
            color: var(--title-color);
        }
        .film {
            display: flex;
            gap: 1rem;
            margin-bottom: 0.5rem;
            text-decoration: none;
            color: var(--text-color);
            .bx-img {
                width: 70px;
                min-width: 70px;
                height: 70px;
            }
            p {
                font-weight: 500;
                margin-bottom: 1rem;
            }
            span {
                display: flex;
                align-items: center;
            }
        }
    }
`
