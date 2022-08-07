import { PayloadAction } from "@reduxjs/toolkit"
import { cookieConfig, CookieKeys, cookies } from "services/cookie"
import { createSlice } from "utils/@reduxjs/toolkit"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { globalSaga } from "./saga"
import { GlobalState } from "./types"

// The initial state of the LoginPage container
export const initialState: GlobalState = {
  users: undefined,
  isLoadingUsers: false,
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    fetchUsers(state, action: PayloadAction<undefined>) {},
    setUsers(state, action: PayloadAction<undefined>) {
      state.users = action.payload
    },
    setIsLoadingUsers(state, action: PayloadAction<boolean>) {},
  },
})

export const {
  actions: GlobalActions,
  reducer: GlobalReducer,
  name: sliceKey,
} = globalSlice

export const useGlobalSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: GlobalReducer })
  useInjectSaga({ key: sliceKey, saga: globalSaga })

  return { GlobalActions }
}
