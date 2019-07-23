//import { stubClient } from './stub-api';

export function MoviesReducer (state, action)  {

    const { payload } = action;

    switch (action.type) {

        case 'addfilter':
            return {
                ...state,
                filter: { ...state.filter, [payload['key']]: payload['value'] }
            };
        case 'fetchmovies':
            //var s = (stubClient.getMoviesAsync());
            if (payload.content==undefined){
                return state;}
            else
                return {
                ...state,
                data: state.data.concat(payload.content)
            };
        case "fetchdetail":
            return{
                ...state,
                detail: payload};
        default:
            return state;
    }
}
