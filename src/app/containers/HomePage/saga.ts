import { checkDomainApi } from "app/providers/globalApis"
import { PageableInterface } from "app/types"
import { toast } from "react-toastify"
import { call, put, takeLatest } from "redux-saga/effects"
import { StandardResponse } from "services/constants"
import { getDomainsApi } from "./providers"
import { HomePageActions } from "./slice"

export function* getDomains(action: {
  type: string
  payload: PageableInterface
}) {
  yield put(HomePageActions.setIsLoadingDomains(true))

  try {
    const response: StandardResponse = yield call(getDomainsApi)
    if (response.is_success) {
      yield put(HomePageActions.setDomains(response.data.data))
      yield put(HomePageActions.setTotal(response.data.total))
    } else {
      // need to be added message
      // toast.error(response.message)
    }
  } catch (err) {
    toast.warn("Can not get Domains")
  } finally {
    yield put(HomePageActions.setIsLoadingDomains(false))
  }
}

export function* Search(action: { type: string; payload: string }) {
  if (!action.payload) {
    yield put(HomePageActions.setSearchedDomain(undefined))
  } else {
    yield put(HomePageActions.setIsLoadingDomains(true))

    try {
      const response: StandardResponse = yield call(
        checkDomainApi,
        action.payload + ".ccd"
      )
      if (response.is_success) {
        yield put(HomePageActions.setSearchedDomain(response.data))
        yield put(HomePageActions.setTotal(undefined))
      }
    } catch (error) {
      console.log(error)
    } finally {
      yield put(HomePageActions.setIsLoadingDomains(false))
    }
  }
}

export function* homePageSaga() {
  yield takeLatest(HomePageActions.getDomains.type, getDomains)
  yield takeLatest(HomePageActions.search.type, Search)
}
