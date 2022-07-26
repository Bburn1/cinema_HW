import React from 'react'

import { Link } from 'react-router-dom'

function MovieList({ movies, onDelete }) {
  const onDeleteMovie = (id) => {
    onDelete(id)
  }

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className='item-list-inbox'>
              <Link to={`${movie.id}`}>
                <p>{movie.title}</p>
              </Link>
              <div className='edit-item_box'>
                <Link to={`new/${movie.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteMovie(movie.id)}
                ></span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieList
