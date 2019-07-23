import { MoviesReducer } from '../reducers'

var movies=[
  {
    id: '10',
    title:'A Very English Scandal',
    akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
    genres: [  "Drama", "Legal"],
    image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
    rating: 7,
    lang:'English',
    timestamp: '2019/7/21  1:07:53'
  },
  {
      id: '20',
      title:'A Very English Scandal',
      akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
      genres: [ "Drama", "Legal"],
      image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
      rating: 7,
      lang:'English',
      timestamp: '2019/7/21  1:07:53'
  },
  {
      id: '30',
      title:'A Very English Scandal',
      akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
      genres: [ "Adventure", "Drama"],
      image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
      rating: 7,
      lang:'English',
      timestamp: '2019/7/21  1:07:53'
  },
  {
      id: '40',
      title:'A Very English Scandal',
      akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
      genres: [  "Comedy" ],
      image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
      rating: 7,
      lang:'English',
      timestamp: '2019/7/21  1:07:53'
    },
    {
        id: '50',
        title:'A Very English Scandal',
        akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
        genres: [ "Adventure", "Drama"],
        image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
        rating: 7,
        lang:'English',
        timestamp: '2019/7/21  1:07:53'
    },
    {
        id: '60',
        title:'A Very English Scandal',
        akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
        genres: [ "Adventure", "Drama"],
        image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
        rating: 7,
        lang:'English',
        timestamp: '2019/7/21  1:07:53'
    },
    {
      id: '70',
      title:'A Very English Scandal',
      akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
      genres: [ "Adventure", "Drama"],
      image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
      rating: 7,
      lang:'English',
      timestamp: '2019/7/21  1:07:53'
    },
    {
        id: '80',
        title:'A Very English Scandal',
        akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
        genres: [  "Comedy" ],
        image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
        rating: 7,
        lang:'Chinese',
        timestamp: '2019/7/21  1:07:53'
    },
    {
        id: '90',
        title:'A Very English Scandal',
        akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
        genres: [ "Adventure", "Drama"],
        image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
        rating: 7,
        lang:'Chinese',
        timestamp: '2019/7/21  1:07:53'
    },
    {
      id: '190',
      title:'A Very English Scandal',
      akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
      genres: [ "Adventure", "Drama"],
      image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
      rating: 7,
      lang:'Chinese',
      timestamp: '2019/7/21  1:07:53'
  },      {
    id: '290',
    title:'A Very English Scandal',
    akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
    genres: [ "Adventure", "Drama"],
    image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
    rating: 7,
    lang:'Chinese',
    timestamp: '2019/7/21  1:07:53'
},
{
  id: '390',
  title:'A Very English Scandal',
  akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
  genres: [ "Adventure", "Drama"],
  image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
  rating: 7,
  lang:'Chinese',
  timestamp: '2019/7/21  1:07:53'
},
{
id: '490',
title:'A Very English Scandal',
akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
genres: [ "Adventure", "Drama"],
image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
rating: 7,
lang:'Chinese',
timestamp: '2019/7/21  1:07:53'
},
{
id: '590',
title:'A Very English Scandal',
akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
genres: [ "Adventure", "Drama"],
image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
rating: 7,
lang:'Chinese',
timestamp: '2019/7/21  1:07:53'
},
{
id: '690',
title:'A Very English Scandal',
akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
genres: [ "Adventure", "Drama"],
image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
rating: 7,
lang:'Chinese',
timestamp: '2019/7/21  1:07:53'
},
{
id: '790',
title:'A Very English Scandal',
akas: ["Egy nagyon angolos botr", "Un scandal britanic"],
genres: [ "Adventure", "Drama"],
image: [ "http://static.tvmaze.com/uploads/images/medium_portrait/164/411209.jpg", "http://static.tvmaze.com/uploads/images/original_untouched/164/411209.jpg"],
rating: 7,
lang:'Chinese',
timestamp: '2019/7/21  1:07:53'
}

];
teststate1={data:movies,
            filter:{}}
teststate2={data:movies,
              filter:{lang:'English'}}
describe('get movies', () => {

  it('should get movies', () => {
    expect(
      MoviesReducer(teststate, {
          type: 'addfilter',
          payload: {lang:'English'}
        }
      ).payload.lang
    ).toEqual('English')

    expect(
      MoviesReducer(teststate2, {
          type: 'addfilter',
          payload: {genres:'Drama'}
        }
      ).payload.lang
    ).toEqual('English')

  })
})

