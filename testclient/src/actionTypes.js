function createAction(mytype) {
    function action(data) {
      return {
        type: mytype,
        payload: data
      }
    }
    return action;
  }

export const addFilter =createAction('addfilter');
export const fetchMovies=createAction('fetchmovies');
export const fetchDetails=createAction('fetchdetail');
export const fetchDetailSaga=createAction('fetchdetailsaga');
export const fetchMoviesSaga=createAction('fetchmoviessaga');