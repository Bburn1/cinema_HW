const db = require('../db')

class movieDirectorsActorsController {
  //-------------------
  async createDirectorByMovie(req, res) {
    try {
      const { title, description } = req.body
      const newDirectorByMovie = await db.query(
        `INSERT INTO movieByDirectors(title, description) VALUES($1, $2) RETURNING *`,
        [title, description]
      )
      res.json(newDirectorByMovie.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async createActorByMovie(req, res) {
    try {
      const { title, description } = req.body
      const newActorByMovie = await db.query(
        `INSERT INTO movieByActors(title, description) VALUES($1, $2) RETURNING *`,
        [title, description]
      )
      res.json(newActorByMovie.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
  //----------------------------------------------------------------
  async getDirectorsByMovie(req, res) {
    try {
      const id = req.params.id

      const directorByMovie = await db.query(
        `
      SELECT directors.id AS director_id, directors.full_name  AS director_name
      
      FROM movies_directors 
       LEFT JOIN directors ON director_id = directors.id
        LEFT JOIN movies ON movie_id = movies.id

       WHERE movie_id = $1
      `,
        [id]
      )

      res.json(directorByMovie.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async getActorsByMovie(req, res) {
    try {
      const id = req.params.id

      const actorByMovie = await db.query(
        `
      SELECT actors.id AS actor_id, actors.full_name  AS actor_name

      FROM movies_actors
       LEFT JOIN actors ON actor_id = actors.id
       LEFT JOIN movies ON movie_id = movies.id

       WHERE movie_id = $1
      `,
        [id]
      )

      res.json(actorByMovie.rows)
    } catch (error) {
      console.log(error)
    }
  }

  //----------------------------------------------------------------

  async deleteDirectorByMovie(req, res) {
    try {
      const id = req.params.id
      const deleteDirectorByMovie = await db.query(
        `DELETE FROM DirectorByMovies WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteDirectorByMovie.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteActorByMovie(req, res) {
    try {
      const id = req.params.id
      const deleteActorByMovie = await db.query(
        `DELETE FROM ActorByMovies WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteActorByMovie.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  ///
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

module.exports = new movieDirectorsActorsController()
