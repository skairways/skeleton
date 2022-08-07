import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const GlobalDomains = {
  root: (state: RootState) => state?.global,
  router: (state: RootState) => state?.router || {},
  users: (state: RootState) => state?.global?.users || initialState.users,
  isLoadingUsers: (state: RootState) =>
    state?.global?.isLoadingUsers || initialState.isLoadingUsers,
}

export const GlobalSelectors = {
  router: createSelector(GlobalDomains.router, (state) => state),
  users: createSelector(GlobalDomains.users, (users) => users),
  isLoadingUsers: createSelector(
    GlobalDomains.isLoadingUsers,
    (isLoadingUsers) => isLoadingUsers
  ),
}
