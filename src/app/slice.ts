import { PayloadAction } from "@reduxjs/toolkit"
import { cookieConfig, CookieKeys, cookies } from "services/cookie"
import { createSlice } from "utils/@reduxjs/toolkit"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { globalSaga } from "./saga"
import { GlobalState } from "./types"

// The initial state of the LoginPage container
export const initialState: GlobalState = {
  loggedIn: false,
  isLoadingSignIn: false,
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload
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
