import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'store/rootReducer';
import rootSaga from 'store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const isProduction = process.env.NODE_ENV === 'production';

const defaultMiddleware = getDefaultMiddleware({ serializableCheck: false });
const prodMiddleware = [sagaMiddleware];
const devMiddleware = [...prodMiddleware, logger];
const middleware = isProduction ? prodMiddleware : devMiddleware;

const store = configureStore({
  reducer: rootReducer,
  middleware: [...defaultMiddleware, ...middleware],
  devTools: !isProduction,
});

sagaMiddleware.run(rootSaga);

export default store;
