import styled from "styled-components";
import { LayoutProps } from "../../common/Layout";

interface Props extends LayoutProps { }

export const Contact = styled.div<Props>`

  height: 60vh;

form {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
}

input[type="email"],
input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  background-color: #444;
  color: #fff;
  font-family: monospace;
}

textarea{
  flex-grow: 1;
  resize: none;
}
input[type="email"]:focus,
input[type="text"]:focus,
textarea:focus {
  outline: none;
  box-shadow: 0px 0px 5px rgba(81, 203, 238, 0.7);
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: linear-gradient(90deg,deeppink 0%, red 100%);
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

button[type="submit"]:hover {
 
}

Button {
    width:100% ;
}

`

export const Map = styled.div<Props>`
  position: relative;

.box-sign {
  display: block;
    background-color: #FF0F6C;
    border-radius: 4px;
    position: absolute;
    width: 34px;
    aspect-ratio: 1/1;
    overflow: hidden;
    cursor: pointer;
    box-sizing: border-box;
    z-index: 2;
    border: 1px solid black;
    font-size: 26px;
    pointer-events: none;
  }
  .plus {
    left: 10px;
    top: 69px;
    border-radius: 4px 4px 0 0;
  }

  .minus {
    left: 10px;
    top: 102px;
    border-radius: 0 0 4px 4px;
  }
  height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  iframe{
    filter: invert(100%) grayscale(100%)
  }

  iframe .leaflet-control-zoom-in {
      filter: none;
    }
`