import { select, call, takeLatest } from "@redux-saga/core/effects";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";
import { saveIsDarkThemeLocalStorage } from "./isDarkThemeLocalStorage";

function* saveIsDarkThemeLocalStorageHandler() {
    const isDarkTheme = yield select(selectIsDarkTheme);
    yield call(saveIsDarkThemeLocalStorage, isDarkTheme);
};

export function* themeSaga() {
    yield takeLatest(toggleTheme.type, saveIsDarkThemeLocalStorageHandler);
};