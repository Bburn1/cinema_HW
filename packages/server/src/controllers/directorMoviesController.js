const db = require('../db')

class MovieByDirectorController {
  async createMovieByDirector(req, res) {
    try {
      const { title, description } = req.body
      const newMovieByDirector = await db.query(
        `INSERT INTO movieByDirectors(title, description) VALUES($1, $2) RETURNING *`,
        [title, description]
      )
      res.json(newMovieByDirector.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getMoviesByDirector(req, res) {
    try {
      const id = req.params.id

      const moviesByDirector = await db.query(
        `
      SELECT movies.id AS movie_id, movies.title  AS movie_title
      
      FROM movies_directors 
       RIGHT JOIN directors ON director_id = directors.id
       RIGHT JOIN movies ON movie_id = movies.id

       WHERE director_id = $1
      `,
        [id]
      )

      res.json(moviesByDirector.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async deleteMovieByDirector(req, res) {
    try {
      const { director_id, movie_id } = req.query
      const deleteMovieByDirector = await db.query(
        `DELETE FROM movies_directors WHERE movie_id = $2 AND director_id = $1`,
        [director_id, movie_id]
      )
      res.json(deleteMovieByDirector.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new MovieByDirectorController()
