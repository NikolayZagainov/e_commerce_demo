import {createStore, applyMiddleware} from 'redux';

import {persistStore} from 'redux-persist';

import rootSaga from './root-saga';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};