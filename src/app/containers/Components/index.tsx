/**
 *
 * Components
 *
 */

import { useGlobalSlice } from "app/slice"
import { useDispatch } from "react-redux"
import styled from "styled-components"

interface Props {}

export function Components(props: Props) {
  useGlobalSlice()
  const dispatch = useDispatch()

  return (
    <>
      <Wrapper></Wrapper>
    </>
  )
}

const Wrapper = styled.div``
