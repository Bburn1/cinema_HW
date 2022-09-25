const db = require('../db')

class MovieController {
  async createMovie(req, res) {
    try {
      const { title, release_year, genre, studio, poster } = req.body

      const newMovie = await db.query(
        `INSERT INTO movies
      (title, release_year, genre_id, studio_id , poster)
      VALUES($1, $2, (SELECT id FROM genres WHERE title = $3), (SELECT id FROM studios WHERE title = $4), $5) RETURNING *`,
        [title, release_year, genre, studio, poster]
      )

      res.json(newMovie.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getMovies(req, res) {
    try {
      const movies = await db.query(`SELECT 
        movies.id AS id, movies.title AS title ,
        studios.title as studio, release_year,  poster, genres.title AS genre 
        FROM movies 
        LEFT JOIN genres 
        ON genre_id = genres.id
        LEFT JOIN studios 
        ON studio_id = studios.id

        `)
      res.json(movies.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async getOneMovie(req, res) {
    try {
      const id = req.params.id
      const movie = await db.query(
        `
    SELECT * FROM movies
    WHERE id = $1`,
        [id]
      )
      res.json(movie.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async updateMovie(req, res) {
    try {
      const { title, release_year, genre, studio, poster, id } = req.body
      const updatedMovie = await db.query(
        `
    UPDATE movies SET title = $1, release_year = $2, genre_id = (SELECT id FROM genres WHERE title = $3), studio_id = (SELECT id FROM studios WHERE title = $4), poster = $5 WHERE id = $6 
    RETURNING *`,
        [title, release_year, genre, studio, poster, id]
      )
      res.json(updatedMovie.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteMovie(req, res) {
    try {
      const id = req.params.id
      const delMovie = await db.query(
        `DELETE FROM movies WHERE id = $1 RETURNING *`,
        [id]
      )

      res.json(delMovie.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new MovieController()
