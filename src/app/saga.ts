import { replace } from "connected-react-router"
import { PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { call, put, select, takeLatest } from "redux-saga/effects"
import { apiService } from "services/api_service"
import { StandardResponse } from "services/constants"
import { cookieConfig, CookieKeys, cookies } from "services/cookie"
import { AppPages } from "./constants"
import { signInAPI } from "./providers/signInApi"
import { GlobalDomains } from "./selectors"
import { globalActions } from "./slice"
import { WalletInfoDataType } from "./types"
import { getUserAPI } from "./providers/globalApis"

export function* SetIsLoggedIn(action: { type: string; payload: boolean }) {
  if (action.payload === false) {
    apiService.token = ""
    cookies.remove(CookieKeys.ACCESS_TOKEN, {
      path: cookieConfig().path,
      domain: cookieConfig().domain,
    })
    yield put(globalActions.setIsLoggedIn(false))
  } else {
    yield put(globalActions.getUserData())
  }
}

export function* SignIn(action: { type: string; payload: string }) {
  yield put(globalActions.setIsLoadingSignIn(true))
  try {
    const response: StandardResponse = yield call(signInAPI, {
      wallet_address: action.payload,
    })
    if (response.is_success && !response.data.token) {
      toast.error(`invalid credentials`)
    }

    if (response.is_success && response.data.token) {
      const token = response.data.token
      cookies.set(CookieKeys.ACCESS_TOKEN, token, cookieConfig())
      yield put(globalActions.setIsLoggedIn(true))
      yield put(globalActions.getUserData())
      toast.success("Wallet connected successfully")
    }
    if (!response.is_success) {
      toast.error(response.message)
    }
  } catch (err) {
    console.warn("Login failed: ", err)
  } finally {
    yield put(globalActions.setIsLoadingSignIn(false))
  }
}

export function* LogOut() {
  yield put(globalActions.setUserData(undefined))
  yield put(replace(AppPages.RootPage))
  cookies.remove(CookieKeys.ACCESS_TOKEN, {
    path: cookieConfig().path,
    domain: cookieConfig().domain,
  })
  cookies.remove(CookieKeys.WalletAddress, {
    path: cookieConfig().path,
    domain: cookieConfig().domain,
  })
  toast.success("Successfully logged out")
}

function* SetWalletInfoData(action: PayloadAction<WalletInfoDataType>) {
  if (action.payload && action.payload[0]) {
    const afterWalletConnection = yield select(
      GlobalDomains.afterWalletConnection
    )
    yield put(afterWalletConnection())
    yield put(globalActions.setAfterWalletConnection(undefined))
  } else {
    yield put(globalActions.setAfterWalletConnection(undefined))
  }
}

export function* getUserData() {
  yield put(globalActions.setIsLoadingUserData(true))
  try {
    const response: StandardResponse = yield call(getUserAPI)

    if (response.is_success) {
      yield put(globalActions.setUserData(response.data))
    }
    if (!response.is_success) {
      toast.error(response.message)
    }
  } catch (err) {
    console.warn("Getting user data failed: ", err)
  } finally {
    yield put(globalActions.setIsLoadingUserData(false))
  }
}

export function* globalSaga() {
  yield takeLatest(globalActions.setIsLoggedIn.type, SetIsLoggedIn)
  yield takeLatest(globalActions.signIn.type, SignIn)
  yield takeLatest(globalActions.logOut.type, LogOut)
  // yield takeLatest(globalActions.setWalletInfoData.type, SetWalletInfoData)
  yield takeLatest(globalActions.getUserData.type, getUserData)
}
