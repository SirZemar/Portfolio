import styled from "styled-components";
import { LayoutProps } from "../../common/Layout";

interface Props extends LayoutProps { }

export const Container = styled.div<Props>`
form {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
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
  height: clamp(150px, 30vh, 700px);
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