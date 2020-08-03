import React, { useEffect, useState } from 'react';
import './FavoritePage.css';
import Axios from 'axios';
import { Popover } from 'antd';
import { IMAGE_URL } from '../../Config';

function FavoritePage() {
  const variables = { userFrom: localStorage.getItem('userId') };

  const [FavoritedMovies, setFavoritedMovies] = useState([]);

  useEffect(() => {
    Axios.post('./api/favorite/getFavoritedMovie', variables).then(
      (response) => {
        if (response.data.success) {
          setFavoritedMovies(response.data.favorites);
        } else {
          alert('Failed to get favorited movies');
        }
      }
    );
  }, []);

  const renderTableBody = FavoritedMovies.map((movie, index) => {
    const content = (
      <div>
        {movie.movieImage} ?
        <img src={`${IMAGE_URL}w500${movie.movieImage}`} />
        :
        "no image"
      </div>
    );

    return (
      <tr>
        <Popover content={content} title={`$movie.movieTitle}`}>
          <td>{movie.movieTitle}</td>
        </Popover>

        <td>{movie.movieRunTime} mins</td>
        <td>
          <button>Remove from the Favorites</button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: '85%', margin: '3rem auto' }}>
      <h3>Favorite Movie List</h3>
      <hr />

      <table>
        <thead>
          <tr>
            <td>Movie Title</td>
            <td>Movie Run Time</td>
            <td>Remove from Favorites</td>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
