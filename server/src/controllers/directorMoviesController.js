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

  // async updateMovieByDirector(req, res) {
  //   try {
  //     const { title, description, id } = req.body
  //     const updateMovieByDirector = await db.query(
  //       `UPDATE movieByDirectors SET title=$1, description=$2
  //     WHERE id = $3 RETURNING *`,
  //       [title, description, id]
  //     )

  //     res.json(updateMovieByDirector.rows[0])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async deleteMovieByDirector(req, res) {
    try {
      const id = req.params.id
      const deleteMovieByDirector = await db.query(
        `DELETE FROM movieByDirectors WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteMovieByDirector.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new MovieByDirectorController()
