/**
 *
 * HomePage
 *
 */

import { Box } from "@material-ui/core"
import styled from "styled-components/macro"
import { CssVariables } from "styles/global-styles"
import { media } from "styles/media"
import { useHomePageSlice } from "./slice"

export const HomePage = () => {
  useHomePageSlice()

  return <Wrapper></Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  ${media.sm`
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
`
