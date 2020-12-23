import { delay, put, takeEvery, takeLatest, debounce, throttle } from 'redux-saga/effects';

export default function* rootSaga() {
    yield fetchGithubWatch();
}

function* fetchGithub() {
    //yield delay(1000);
    yield put({ type: 'github/success' });
}

function* fetchGithubWatch() {
    yield throttle(2000, 'github/request', fetchGithub);
}
