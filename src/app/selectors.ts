import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const GlobalDomains = {
  root: (state: RootState) => state?.global,
  router: (state: RootState) => state?.router || {},
  loggedIn: (state: RootState) => state?.global?.loggedIn || false,
  isOpenConnectWalletInfo: (state: RootState) =>
    state?.global?.globalModals.isOpenConnectWalletInfo ||
    initialState.globalModals.isOpenConnectWalletInfo,
  isOpenConnectWalletQR: (state: RootState) =>
    state?.global?.globalModals.isOpenConnectWalletQR ||
    initialState.globalModals.isOpenConnectWalletQR,
  isOpenUserWallet: (state: RootState) =>
    state?.global?.globalModals.isOpenUserWallet ||
    initialState.globalModals.isOpenUserWallet,
  isOpenDisconnectWallet: (state: RootState) =>
    state?.global?.globalModals.isOpenDisconnectWallet ||
    initialState.globalModals.isOpenDisconnectWallet,
  isOpenAlert: (state: RootState) =>
    state?.global?.globalModals.isOpenAlert ||
    initialState.globalModals.isOpenAlert,
  isOpenCreateSubdomain: (state: RootState) =>
    state?.global?.globalModals.isOpenCreateSubdomain ||
    initialState.globalModals.isOpenCreateSubdomain,
  isOpenConfirmSubdomain: (state: RootState) =>
    state?.global?.globalModals.isOpenConfirmSubdomain ||
    initialState.globalModals.isOpenConfirmSubdomain,
  qrCodeWalletConnectorData: (state: RootState) =>
    state?.global?.qrCodeWalletConnectorData ||
    initialState.qrCodeWalletConnectorData,
  executeRecaptcha: (state: RootState) =>
    state?.global?.executeRecaptcha || undefined,
  walletInfoData: (state: RootState) =>
    state?.global?.walletInfoData || undefined,
  isLoadingSignIn: (state: RootState) =>
    state?.global?.isLoadingSignIn || initialState.isLoadingSignIn,
  afterWalletConnection: (state: RootState) =>
    state.global?.afterWalletConnection || undefined,
  isLoadingUserData: (state: RootState) =>
    state.global?.isLoadingUserData || initialState.isLoadingUserData,
  user: (state: RootState) => state.global?.user || initialState.user,
}

export const GlobalSelectors = {
  router: createSelector(GlobalDomains.router, (state) => state),
  loggedIn: createSelector(GlobalDomains.loggedIn, (isLoggedIn) => isLoggedIn),
  executeRecaptcha: createSelector(GlobalDomains.executeRecaptcha, (e) => e),
  isOpenConnectWalletInfo: createSelector(
    GlobalDomains.isOpenConnectWalletInfo,
    (isOpen) => isOpen
  ),
  isOpenConnectWalletQR: createSelector(
    GlobalDomains.isOpenConnectWalletQR,
    (isOpen) => isOpen
  ),
  isOpenUserWallet: createSelector(
    GlobalDomains.isOpenUserWallet,
    (isOpen) => isOpen
  ),
  isOpenDisconnectWallet: createSelector(
    GlobalDomains.isOpenDisconnectWallet,
    (isOpen) => isOpen
  ),
  isOpenAlert: createSelector(GlobalDomains.isOpenAlert, (isOpen) => isOpen),
  isOpenCreateSubdomain: createSelector(
    GlobalDomains.isOpenCreateSubdomain,
    (isOpen) => isOpen
  ),
  isOpenConfirmSubdomain: createSelector(
    GlobalDomains.isOpenConfirmSubdomain,
    (isOpen) => isOpen
  ),
  qrCodeWalletConnectorData: createSelector(
    GlobalDomains.qrCodeWalletConnectorData,
    (data) => data
  ),
  walletInfoData: createSelector(GlobalDomains.walletInfoData, (data) => data),
  isLoadingSignIn: createSelector(
    GlobalDomains.isLoadingSignIn,
    (isLoading) => isLoading
  ),
  isLoadingUserData: createSelector(
    GlobalDomains.isLoadingUserData,
    (isLoading) => isLoading
  ),
  user: createSelector(GlobalDomains.user, (userData) => userData),
}
