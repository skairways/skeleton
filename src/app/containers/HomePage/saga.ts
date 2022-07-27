import { toast } from "react-toastify"
import { call, put, takeLatest } from "redux-saga/effects"
import { StandardResponse } from "services/constants"
import { getTodoAPI } from "./providers"
import { HomePageActions } from "./slice"

export function* fetchData() {
  yield put(HomePageActions.setIsLoading(true))

  try {
    const response: StandardResponse = yield call(getTodoAPI)

    if (response) {
      yield put(HomePageActions.setData(response.data))
    } else {
      toast.error("Can not get data")
    }
  } catch (err) {
    toast.warn("Can not get data")
  } finally {
    yield put(HomePageActions.setIsLoading(false))
  }
}

export function* homePageSaga() {
  yield takeLatest(HomePageActions.fetchData.type, fetchData)
}
