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

  // async updateMovieByActor(req, res) {
  //   try {
  //     const { title, description, id } = req.body
  //     const updateMovieByActor = await db.query(
  //       `UPDATE movieByActors SET title=$1, description=$2
  //     WHERE id = $3 RETURNING *`,
  //       [title, description, id]
  //     )

  //     res.json(updateMovieByActor.rows[0])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async deleteMovieByActor(req, res) {
    try {
      const movie_id = req.params.id
      const actor_id = req.params.id

      // const id2 = req.params.id

      console.log(movie_id)
      console.log(actor_id)

      console.log(req.body)

      // console.log(id)

      const deleteMovieByActor = await db.query(
        `DELETE FROM  movies_actors WHERE movie_id = $1`,
        [movie_id]
      )
      res.json(deleteMovieByActor.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  // movie_id = $1 AND actor_id = $2
}

module.exports = new MovieByActorController()
