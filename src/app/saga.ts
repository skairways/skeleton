import { toast } from "react-toastify"
import { call, put, takeLatest } from "redux-saga/effects"
import { StandardResponse } from "services/constants"
import { getGlobalAPI } from "./providers/globalApis"
import { GlobalActions } from "./slice"

export function* fetchUsers() {
  yield put(GlobalActions.setIsLoadingUsers(true))

  try {
    const response: StandardResponse = yield call(getGlobalAPI)

    if (response) {
      yield put(GlobalActions.setUsers(response.data))
    } else {
      toast.error("Can not get users")
    }
  } catch (err) {
    toast.warn("Can not get users")
  } finally {
    yield put(GlobalActions.setIsLoadingUsers(false))
  }
}

export function* globalSaga() {
  yield takeLatest(GlobalActions.fetchUsers.type, fetchUsers)
}
