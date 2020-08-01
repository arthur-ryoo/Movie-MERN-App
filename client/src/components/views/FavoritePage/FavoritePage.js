import React from 'react';
import './FavoritePage.css';

function FavoritePage() {
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
      </table>
    </div>
  );
}

export default FavoritePage;
