import { put, call, takeEvery, delay } from 'redux-saga/effects';
import { increment, incrementAsync } from 'features/counter/counterSlice';

function* incrementAsyncSaga(action: ReturnType<typeof incrementAsync>) {
  yield delay(1000);
  yield put(increment());
}

export default function* watchCounter() {
  yield takeEvery(incrementAsync.type, incrementAsyncSaga);
}
