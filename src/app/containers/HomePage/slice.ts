import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { homePageSaga } from "./saga"
import { ContainerState } from "./types"

// The initial state of the HomePage container
export const initialState: ContainerState = {
  isLoadingDomains: false,
}

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setIsLoadingDomains(state, action: PayloadAction<boolean>) {
      state.isLoadingDomains = action.payload
    },
  },
})

export const {
  actions: HomePageActions,
  reducer: HomePageReducer,
  name: sliceKey,
} = homePageSlice

export const useHomePageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: HomePageReducer })
  useInjectSaga({ key: sliceKey, saga: homePageSaga })

  return { homePageSlice }
}
