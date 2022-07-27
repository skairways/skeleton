import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const HomePageDomains = {
  root: (state: RootState) => state?.homePage,
  isLoading: (state: RootState) =>
    state?.homePage?.isLoading || initialState.isLoading,
  data: (state: RootState) => state?.homePage?.data || initialState.data,
}

export const HomePageSelectors = {
  isLoading: createSelector(
    HomePageDomains.isLoading,
    (isLoading) => isLoading
  ),
  data: createSelector(HomePageDomains.data, (data) => data),
}
