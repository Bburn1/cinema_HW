import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteGenreAction } from '../../store/actions/genreAction'

function GenreList({ genres }) {
  const dispatch = useDispatch()
  const onDeleteGenre = (id) => {
    dispatch(deleteGenreAction(id))
  }
  return (
    <div>
      <ul>
        {genres.map((genre) => {
          return (
            <li key={genre.id} className='item-list-inbox'>
              <Link key={genre.id} to={`${genre.id}`}>
                <p>{genre.title}</p>
              </Link>

              <div className='edit-item_box'>
                <Link to={`new/${genre.id}`}>
                  <p id='edit' className='fa fa-pencil'></p>
                </Link>
                <span
                  id='delete'
                  className='fa fa fa-trash-o'
                  onClick={() => onDeleteGenre(genre.id)}
                ></span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GenreList
