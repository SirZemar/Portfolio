import styled from "styled-components";

export const Container = styled.div`
    grid-area: b;
    align-self: center;

    label {
        display: block;
        width: 100%;
        height: 3px;
        box-shadow: inset 0 0 0 3px grey;

        div {
            height: 100%;
            border-radius: 5px;
        }

        .html {
            width: 75%;
            background-color: rgb(230, 0, 0);
            box-shadow: 0 0 8px rgb(255, 0, 0, 0.5);
        }

        .css {
            width: 75%;
            background-color: rgb(230, 150, 200);
            box-shadow: 0 0 8px rgb(235, 150, 230, 0.5);
        }

        .js {
            width: 70%;
            background-color: rgb(230, 0, 0);
            box-shadow: 0 0 8px rgb(255, 0, 0, 0.5);
        }

        .react {
            width: 55%;
            background-color: rgb(230, 150, 200);
            box-shadow: 0 0 8px rgb(235, 150, 230, 0.5);
        }

        .angular {
            width: 40%;
            background-color: rgb(230, 0, 0);
            box-shadow: 0 0 8px rgb(255, 0, 0, 0.5);
        } 

        .firebase {
            width: 20%;
            background-color: rgb(230, 150, 200);
            box-shadow: 0 0 8px rgb(235, 150, 230, 0.5);
        }
        /* .js {
            width: 70%;
            background-color: rgb(230, 150, 0);
            box-shadow: 0 0 8px rgb(235, 150, 0, 70%);
        }

        .react {
            width: 55%;
            background-color: rgb(30, 150, 200);
            box-shadow: 0 0 8px rgb(35, 150, 230, 70%);
        }

        .angular {
            width: 40%;
            background-color: rgb(150, 26, 76);
            box-shadow: 0 0 8px rgb(200, 56, 76, 70%);
        } 

        .firebase {
            width: 20%;
            background-color: rgb(100, 180, 50);
            box-shadow: 0 0 8px rgb(100, 180, 60, 70%);
        } */
    }
`