import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const HomePageDomains = {
  root: (state: RootState) => state?.homePage,
  domains: (state: RootState) =>
    state?.homePage?.domains || initialState.domains,
  searchedDomain: (state: RootState) =>
    state?.homePage?.searchedDomain || initialState.searchedDomain,
  isLoadingDomains: (state: RootState) =>
    state?.homePage?.isLoadingDomains || initialState.isLoadingDomains,
  searchValue: (state: RootState) =>
    state?.homePage?.searchValue || initialState.searchValue,
  total: (state: RootState) => state?.homePage?.total || initialState.total,
}

export const HomePageSelectors = {
  domains: createSelector(
    [HomePageDomains.domains, HomePageDomains.searchedDomain],
    (domains, searchedDomain) => {
      if (searchedDomain) {
        let searchedDomains = [{ ...searchedDomain, id: searchedDomain.name }]

        return searchedDomains
      }
      return domains
    }
  ),
  isLoadingDomains: createSelector(
    HomePageDomains.isLoadingDomains,
    (isLoading) => isLoading
  ),
  searchValue: createSelector(HomePageDomains.searchValue, (text) => text),
  total: createSelector(HomePageDomains.total, (totalCount) => totalCount),
}
