import styled from 'styled-components'
export const Style = styled.div`
    position: relative;
    .result {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        background-color: #000;
        padding: 1rem 0.5rem;
        height: calc(100vh - var(--height-header));
        overflow: auto;
        a {
            color: #fff;
        }
    }
`
