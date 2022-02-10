import styled from 'styled-components'
export const Style = styled.div`
    margin-top: 1rem;
    .title {
        font-size: 2rem;
        color: var(--first-color);
        margin-bottom: var(--mb-1);
    }
    overflow-y: auto;
    height: calc(100vh - var(--height-header) - 100px);
`
