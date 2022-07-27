import { PayloadAction } from "@reduxjs/toolkit"
import { DomainsType, DomainType, PageableInterface } from "app/types"
import { createSlice } from "utils/@reduxjs/toolkit"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { homePageSaga } from "./saga"
import { ContainerState } from "./types"

// The initial state of the HomePage container
export const initialState: ContainerState = {
  domains: undefined,
  isLoadingDomains: false,
  searchedDomain: undefined,
  searchValue: "",
  total: undefined,
}

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setIsLoadingDomains(state, action: PayloadAction<boolean>) {
      state.isLoadingDomains = action.payload
    },
    getDomains(_, action: PayloadAction<PageableInterface>) {},
    setDomains(state, action: PayloadAction<DomainsType>) {
      state.domains = action.payload
    },
    search(state, action: PayloadAction<string>) {},
    setSearchedDomain(state, action: PayloadAction<DomainType | undefined>) {
      state.searchedDomain = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setTotal(state, action: PayloadAction<number | undefined>) {
      state.total = action.payload
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
