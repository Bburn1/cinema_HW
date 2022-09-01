const db = require('../db')

class MovieByActorController {
  async createMovieByActor(req, res) {
    try {
      const { title, description } = req.body
      const newMovieByActor = await db.query(
        `INSERT INTO movieByActors(title, description) VALUES($1, $2) RETURNING *`,
        [title, description]
      )
      res.json(newMovieByActor.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getMoviesByActor(req, res) {
    try {
      const id = req.params.id

      const moviesByActor = await db.query(
        `
      SELECT movies.id AS movie_id, movies.title  AS movie_title
      
      FROM movies_actors 
       RIGHT JOIN actors ON actor_id = actors.id
       RIGHT JOIN movies ON movie_id = movies.id

       WHERE actor_id = $1
      `,
        [id]
      )

      res.json(moviesByActor.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async deleteMovieByActor(req, res) {
    try {
      const { actor_id, movie_id } = req.query
      const deleteMovieByActor = await db.query(
        `DELETE FROM movies_actors WHERE movie_id = $2 AND actor_id = $1`,
        [actor_id, movie_id]
      )
      res.json(deleteMovieByActor.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new MovieByActorController()
