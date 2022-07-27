import { PayloadAction } from "@reduxjs/toolkit"
import { cookieConfig, CookieKeys, cookies } from "services/cookie"
import { createSlice } from "utils/@reduxjs/toolkit"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { globalSaga } from "./saga"
import {
  GlobalState,
  OpenWalletConnectionModel,
  QrCodeWalletConnectorDataType,
  UserDataType,
  WalletInfoDataType,
} from "./types"

// The initial state of the LoginPage container
export const initialState: GlobalState = {
  loggedIn: false,
  isLoadingSignIn: false,
  executeRecaptcha: undefined,
  globalModals: {
    isOpenConnectWalletInfo: false,
    isOpenConnectWalletQR: false,
    isOpenUserWallet: false,
    isOpenDisconnectWallet: false,
    isOpenAlert: false,
    isOpenCreateSubdomain: false,
    isOpenConfirmSubdomain: false,
  },
  qrCodeWalletConnectorData: undefined,
  walletInfoData: undefined,
  afterWalletConnection: undefined,
  user: undefined,
  isLoadingUserData: false,
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload
    },
    setExecuteRecaptcha(state, action: PayloadAction<any>) {
      state.executeRecaptcha = action.payload
    },
    setIsOpenConnectWalletInfo(
      state,
      action: PayloadAction<OpenWalletConnectionModel>
    ) {
      state.globalModals.isOpenConnectWalletInfo = action.payload.open
      if (action.payload.open) {
        state.afterWalletConnection = action.payload.afterConnection
      }
    },
    setAfterWalletConnection(state, action: PayloadAction<any>) {
      state.afterWalletConnection = action.payload
    },
    clearTheAfterWalletConnectionAction(state, action: PayloadAction<void>) {
      state.afterWalletConnection = undefined
    },
    setIsOpenConnectWalletQR(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenConnectWalletQR = action.payload
    },
    setIsOpenUserWallet(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenUserWallet = action.payload
    },
    setIsOpenDisconnectWallet(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenDisconnectWallet = action.payload
    },
    setIsOpenAlert(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenAlert = action.payload
    },
    setIsOpenCreateSubdomain(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenCreateSubdomain = action.payload
    },
    setIsOpenConfirmSubdomain(state, action: PayloadAction<boolean>) {
      state.globalModals.isOpenConfirmSubdomain = action.payload
    },
    setQrCodeWalletConnectorData(
      state,
      action: PayloadAction<QrCodeWalletConnectorDataType>
    ) {
      state.qrCodeWalletConnectorData = action.payload
    },
    setWalletInfoData(state, action: PayloadAction<WalletInfoDataType>) {
      state.walletInfoData = action.payload
      if (action.payload && action.payload[0].address) {
        cookies.set(
          CookieKeys.WalletAddress,
          action.payload[0].address,
          cookieConfig()
        )
      } else if (action.payload === undefined) {
        cookies.remove(CookieKeys.WalletAddress, {
          path: cookieConfig().path,
          domain: cookieConfig().domain,
        })
      }
    },
    signIn(state, action: PayloadAction<any>) {},
    setIsLoadingSignIn(state, action: PayloadAction<boolean>) {
      state.isLoadingSignIn = action.payload
    },
    logOut(state, action: PayloadAction<undefined>) {
      state.loggedIn = false
    },
    getUserData(state, action: PayloadAction<undefined>) {},
    setUserData(state, action: PayloadAction<UserDataType | undefined>) {
      state.user = action.payload
    },
    setIsLoadingUserData(state, action: PayloadAction<boolean>) {
      state.isLoadingUserData = action.payload
    },
  },
})

export const {
  actions: globalActions,
  reducer: globalReducer,
  name: sliceKey,
} = globalSlice

export const useGlobalSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: globalReducer })
  useInjectSaga({ key: sliceKey, saga: globalSaga })

  return { globalActions }
}
