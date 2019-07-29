import { MoviesReducer } from '../reducer'
import { addFilter } from '../actionTypes';
var movies = [
  {
    id: '10',
    title: 'A Very English Scandal',
    akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
    genres: ["Drama", "Legal"],
    image: ["http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
    rating: 7,
    lang: 'English',
    timestamp: '2019/7/21  1:07:53'
  }
];
var teststate1 = {
  data: movies,
  filter: {}
}
var teststate2 = {
  data: movies,
  filter: { lang: 'English' }
}

describe('add filter action', () => {

  it('add filter action1', () => {
    expect(
      MoviesReducer(teststate1, addFilter({ key: 'lang', value: 'English' })).filter
    ).toEqual({ lang: 'English' })
  })
})

describe('add filter action2', () => {
  it('should get movies', () => {
    expect(
      MoviesReducer(teststate2, addFilter({ key: 'genres', value: 'Drama' })).filter
    ).toEqual({ lang: 'English', genres: 'Drama' })
  })
})

