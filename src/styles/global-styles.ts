import { createGlobalStyle } from "styled-components/macro"
import spaceGrotesk from "./fonts/SpaceGrotesk.ttf"

export enum CssVariables {
  /* Here starts skeleton colors */

  /** #1B1B1B */
  Main = "var(--main)",

  //   Spacing margins

  Space8 = "8px",
  Space16 = "16px",
  Space24 = "24px",
  Space32 = "32px",
  Space40 = "40px",
  Space56 = "56px",
  Space72 = "72px",
  Space80 = "80px",
  Space96 = "96px",
  Space120 = "120px",
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
  	font-family: "Space Grotesk";
  	src: url(${spaceGrotesk});
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "Space Grotesk";
  }


  :root {
    --main: #1B1B1B;
  }


  html,
  body {
    height: 100%;
    width: 100%;
    background-color: var(--black1);
    color: var(--lightGrey);
    font-family: "Space Grotesk", sans-serif;
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }
`
