import { all } from 'redux-saga/effects';
import contentSaga from './contentSaga';

export default function* rootSaga() {
  yield all([
    contentSaga(),
  ]);
}