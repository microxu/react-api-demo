import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchDetails,fetchMovies} from './actionTypes';
import { all, fork } from 'redux-saga/effects';
import { stubClient } from './stub-api';

/** get movies details */
function* fetchMovieDetailSaga(action) {
    const Mdetail = yield call(stubClient.getMovieDetails, action.payload);
    yield put(fetchDetails(Mdetail));
    //yield put({ type: 'fetchdetail', payload:Mdetail });
}
/**get movies pagiation */
function* fetchMoviesSaga(action) {
    const Mdetail = yield call(stubClient.getMoviesAsync, action.payload);
    yield put(fetchMovies(Mdetail));
    //yield put({ type: 'fetchmovies', payload:Mdetail });
}
function* MovieDetailSaga() {
    yield takeEvery('fetchdetailsaga', fetchMovieDetailSaga);
    yield takeEvery('fetchmoviessaga', fetchMoviesSaga);
}

/*export function* rootSaga() {
    yield all([
        fork(MovieDetailSaga)
    ]);
}*/
export function* rootSaga() {
    yield MovieDetailSaga()
}