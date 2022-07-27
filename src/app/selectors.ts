import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const GlobalDomains = {
  root: (state: RootState) => state?.global,
  router: (state: RootState) => state?.router || {},
  loggedIn: (state: RootState) => state?.global?.loggedIn || false,
}

export const GlobalSelectors = {
  router: createSelector(GlobalDomains.router, (state) => state),
  loggedIn: createSelector(GlobalDomains.loggedIn, (isLoggedIn) => isLoggedIn),
}
