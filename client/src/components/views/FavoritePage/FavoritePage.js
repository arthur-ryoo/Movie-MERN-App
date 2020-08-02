import React, { useEffect, useState } from 'react';
import './FavoritePage.css';
import Axios from 'axios';

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
    console.log(movie.movieTitle);
    return (
      <tr>
        <td>{movie.movieTitle}</td>

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
            <th>Movie Title</th>
            <th>Movie Run Time</th>
            <th>Remove from Favorites</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
