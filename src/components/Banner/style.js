import styled from 'styled-components'
export const Style = styled.div`
    .banner-film {
        .banner-item {
            position: relative;
            .bx-img {
                height: 300px;
            }
            .name {
                position: absolute;
                font-size: 2rem;
                width: 100%;
                color: var(--input-color);
                bottom: 0;
                padding: var(--mb-1);
                text-align: center;
                /* left: 50%;
                transform: translateX(-50%); */
                text-overflow: ellipsis;

                /* Required for text-overflow to do anything */
                white-space: nowrap;
                overflow: hidden;
                background: rgb(209, 195, 195);
                background: linear-gradient(
                    180deg,
                    rgba(209, 195, 195, 0.4542191876750701) 0%,
                    rgba(59, 52, 52, 1) 100%
                );
            }
        }
    }
`
