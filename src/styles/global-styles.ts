import { createGlobalStyle } from "styled-components/macro"
import spaceGrotesk from "./fonts/SpaceGrotesk.ttf"

export enum CssVariables {
  /* Here starts cns colors */

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

  :root {
    --main: #1B1B1B;
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }

  ::-webkit-scrollbar {
      width: 1px;
      height: 1px;
      background-color: var(--main);
  }


  /*vertical Track */

  ::-webkit-scrollbar-track:vertical {
      /* box-shadow: inset 0 0 3px grey; */
      border-radius: 10px;
  }


  /*vertical Handle */

  ::-webkit-scrollbar-thumb:vertical {
      background: var(--black);
      border-radius: 10px;
  }


  /*horizontal Track */

  ::-webkit-scrollbar-track:horizontal {
      box-shadow: inset 0 0 3px var(--main);
      border-radius: 10px;
  } 


  /*horizontal Handle */

  ::-webkit-scrollbar-thumb:horizontal {
      background: var(--main);
      border-radius: 10px;
  }


  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
      background: var(--main);
  }

  ::selection {
      background: var(--main);
      color: var(--main);
  }

  ::-moz-selection {
      background: var(--main);
      color: var(--main);
  }

  * {
      scrollbar-width: thin;
  }

`
