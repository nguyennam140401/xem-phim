import styled from 'styled-components'
export const Style = styled.div`
    h3 {
        font-size: 1.5rem;
        margin: var(--mb-1-5) 0;
    }
    & > * {
        margin-bottom: var(--mb-1-5);
    }
    .score {
        display: flex;
        span {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            margin-right: 1rem;
        }
    }
    .list-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        .tag {
            background-color: var(--title-color);
            color: #fff;
            font-size: 1rem;
            border-radius: 1rem;
            padding: 0.25rem 0.5rem;
        }
    }
    .intro {
        font-size: 1.25rem;
    }
    .list-episode {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        .episode {
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background: var(--first-color-alt);
            color: var(--input-color);
            border-radius: 5px;
        }
    }
`
