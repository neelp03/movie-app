import { getQueriesForElement } from '@testing-library/react';
import React from 'react';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote) => {
  if(vote >= 7) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

const Movie = (
  {
    title,
    poster_path,
    overview,
    vote_average,
    release_date
  }
) => (
  <div className='movie'>
    <img src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80'} alt={title}/>
    <div className='movie-info'>
      <h3>{title} ({release_date.substring(0,4)})</h3>
      <span className={ `tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
    </div>
    <div className='movie-overview'>
      <h2>Plot:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;