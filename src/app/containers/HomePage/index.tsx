/**
 *
 * HomePage
 *
 */

import { Box } from "@material-ui/core"
import { Spacer } from "app/components/common/Spacer"
import { StyledContainer } from "app/components/common/StyledContainer"
import { GridLoading } from "app/components/GridLoading"
import { GlobalDomains } from "app/selectors"
import { GlobalActions } from "app/slice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components/macro"
import { CssVariables } from "styles/global-styles"
import { media } from "styles/media"
import { HomePageDomains } from "./selectors"
import { HomePageActions, useHomePageSlice } from "./slice"

export const HomePage = () => {
  useHomePageSlice()
  const dispatch = useDispatch()

  const isLoading = useSelector(HomePageDomains.isLoading)
  const data = useSelector(HomePageDomains.data)
  const isLoadingUsers = useSelector(GlobalDomains.isLoadingUsers)
  const users = useSelector(GlobalDomains.users)

  useEffect(() => {
    dispatch(HomePageActions.fetchData())
    dispatch(GlobalActions.fetchUsers())
  }, [])

  if (isLoading) {
    return <GridLoading />
  }

  return (
    <Wrapper>
      <StyledContainer>
        {data && (
          <Box display="flex">
            HomePage todo:
            <Spacer hSpace={CssVariables.Space8} />
            {data.title}
          </Box>
        )}

        {isLoadingUsers ? (
          <GridLoading />
        ) : (
          <>
            {users && (
              <Box display="flex">
                HomePage Global users:
                <Spacer hSpace={CssVariables.Space8} />
                <Box>
                  {users.map((user) => (
                    <Box key={user.id}>{user.name}</Box>
                  ))}
                </Box>
              </Box>
            )}
          </>
        )}
      </StyledContainer>
    </Wrapper>
  )
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
