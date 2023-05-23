import styled from "styled-components";

interface Props {
    stars: string;
    twinkling: string;
}
export const Container = styled.div<Props>`
    .stars, .twinkling {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }

    .stars {
      background:#000 url(${({ stars }) => stars}) repeat top center;
      z-index:-50;
      animation: show 2s ease-in;
    }

    .twinkling{
      background:transparent  url(${({ twinkling }) => twinkling}) repeat top center;
      z-index:-49;
      opacity: 0;
      animation:move-twink-back 40s linear infinite ;
      animation-delay: 2s;
    }

    @keyframes move-twink-back {
        0% {
            background-position:0 0;
            opacity: 0.5;
        }
        50% {
            opacity: 0.8;
            background-position:-50% 75%
        }
        100% {
            opacity: 0.5;
            background-position:-100% 150%;
        }
    }

    @keyframes show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`