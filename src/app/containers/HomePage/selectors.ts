import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const HomePageDomains = {
  root: (state: RootState) => state?.homePage,
  isLoadingDomains: (state: RootState) =>
    state?.homePage?.isLoadingDomains || initialState.isLoadingDomains,
}

export const HomePageSelectors = {
  isLoadingDomains: createSelector(
    HomePageDomains.isLoadingDomains,
    (isLoading) => isLoading
  ),
}
