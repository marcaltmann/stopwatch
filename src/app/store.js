import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import counterReducer from '../features/counter/counterSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
