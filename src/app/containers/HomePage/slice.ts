import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { homePageSaga } from "./saga"
import { ContainerState } from "./types"

// The initial state of the HomePage container
export const initialState: ContainerState = {
  isLoading: false,
  data: undefined,
}

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    fetchData(state, action: PayloadAction<undefined>) {},
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload
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
