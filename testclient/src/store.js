import { applyMiddleware,createStore } from 'redux';
import {MoviesReducer} from './reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga';

const initValue={
    data:[],
    filer:{},
    detail:{}
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    MoviesReducer,
    initValue,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
