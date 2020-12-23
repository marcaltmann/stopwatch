import { delay } from 'redux-saga/effects';

export default function* rootSaga() {
    yield delay(1000);
    console.log('Hello saga');
    yield delay(1000);
    console.log('what?');
}
