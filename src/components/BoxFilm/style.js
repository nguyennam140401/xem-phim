import styled from 'styled-components'
export const Style = styled.div`
    width: 25%;
    margin-bottom: var(--mb-1-5);
    padding-right: 1rem;
    &:last-child {
        padding: 0;
    }
    a {
        text-decoration: none;
        .bx_img {
            width: 100%;
            height: 300px;
        }
        p {
            margin-top: var(--mb-0-5);
            font-size: 1.25rem;
            color: var(--first-color);
            transition: 0.25s;

            text-overflow: ellipsis;

            /* Required for text-overflow to do anything */
            white-space: nowrap;
            overflow: hidden;
        }
        &:hover {
            p {
                color: var(--first-color-alt);
            }
        }
    }
`
