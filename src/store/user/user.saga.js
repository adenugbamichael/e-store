import { USER_ACTION_TYPES } from "./user.types"

import { takeLast, put, all, call } from "redux-saga/effects"

import { signInSuccess, signInFailed } from "./user.action"

import { getCurrentUser } from "../../utils/firebase/firebase.utils"

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (userAuth) return
  } catch (error) {}
}

export function* onCheckUserSession() {
  yield takeLast(USER_ACTION_TYPES.CHECK_USER_SESSION)
}

export function* userSagas() {
  yield all([])
}
