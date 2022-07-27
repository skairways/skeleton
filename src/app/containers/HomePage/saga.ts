import { toast } from "react-toastify"
import { call, put, takeLatest } from "redux-saga/effects"
import { StandardResponse } from "services/constants"
import { HomePageActions } from "./slice"

export function* getDomains(action: { type: string; payload: any }) {
  yield put(HomePageActions.setIsLoadingDomains(true))

  try {
    /* const response: StandardResponse = yield call(getDomainsApi)
    if (response.is_success) {
      yield put(HomePageActions.setDomains(response.data.data))
      yield put(HomePageActions.setTotal(response.data.total))
    } else {
      toast.error(response.message)
    } */
  } catch (err) {
    toast.warn("Can not get")
  } finally {
    yield put(HomePageActions.setIsLoadingDomains(false))
  }
}

export function* homePageSaga() {
  // yield takeLatest(HomePageActions.getDomains.type, getDomains)
}
