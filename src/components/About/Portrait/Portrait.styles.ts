import styled from "styled-components";

export const Container = styled.div`

    .portrait-image {
        max-height: 100%;
        max-width: 100%;
        filter: contrast(120%) brightness(90%);
        border-radius: 5px;
        animation: opacity 0.7s;

        @keyframes opacity {
            from {opacity: 0}
            to {opacity: 1}
        }
}
`