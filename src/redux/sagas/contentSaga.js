import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchContentSuccess, fetchContentFailure } from '../actions/contentActions';

const BASE_URL = 'https://test.create.diagnal.com/data';

function* fetchContent(action) {
  try {
    const response = yield call(axios.get, `${BASE_URL}/page${action.page}.json`);
    yield put(fetchContentSuccess(response.data.page['content-items'].content));
  } catch (error) {
    yield put(fetchContentFailure(error));
  }
}

export default function* contentSaga() {
  yield takeLatest('FETCH_CONTENT_REQUEST', fetchContent);
}