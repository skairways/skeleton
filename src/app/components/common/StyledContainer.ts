import styled from "styled-components/macro"
import { media } from "styles/media"

type T = number | string

type Props = {
  pl?: T
  pr?: T
  ml?: T
  mr?: T
  w?: T
  bg?: string
  mdPad?: T
  smPad?: T
}

export const StyledContainer = styled.div<Props>`
  width: ${(props) => (props.w ? props.w : 100)}%;
  max-width: ${(props) => (props.w ? props.w : 1305)}px;

  margin-right: auto;
  margin-left: auto;

  padding-left: ${(props) => (props.pl ? props.pl : 30)}px;
  padding-right: ${(props) => (props.pr ? props.pr : 30)}px;

  background: ${(props) => (props.bg ? props.bg : "")};

  ${media.md`
    padding: 0 ${(props) => (props.mdPad ? props.mdPad : "20")}px;
  `}

  ${media.sm`
    padding: 0 ${(props) => (props.smPad ? props.smPad : "12")}px;
  `}
`
