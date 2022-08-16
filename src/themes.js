import {createGlobalStyle} from "styled-components";



export const darkTheme = {
    body: "#1e1e1e",
    textColor: "white ",
}

export const lightTheme = {
    body: "white",
    textColor: "#1e1e1e",
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }

`