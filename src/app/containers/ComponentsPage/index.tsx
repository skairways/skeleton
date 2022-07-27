/**
 *
 * Components
 *
 */

import { GridLoading } from "app/components/GridLoading"
import { useGlobalSlice } from "app/slice"
import { useDispatch } from "react-redux"
import styled from "styled-components"

interface Props {}

export function Components(props: Props) {
  useGlobalSlice()
  const dispatch = useDispatch()

  return (
    <Wrapper>
      Special page to show all components in the app <GridLoading />
    </Wrapper>
  )
}

const Wrapper = styled.div``
