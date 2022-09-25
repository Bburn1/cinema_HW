const db = require('../db')

class GenreController {
  async createGenre(req, res) {
    try {
      const { title, description } = req.body
      const newGenre = await db.query(
        `INSERT INTO genres(title, description) VALUES($1, $2) RETURNING *`,
        [title, description]
      )
      res.json(newGenre.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getGenres(req, res) {
    try {
      const genres = await db.query(`SELECT * FROM genres`)

      res.json(genres.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async getGenreById(req, res) {
    try {
      const { id } = req.params
      const genre = await db.query(
        `SELECT * FROM genres WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(genre.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async updateGenre(req, res) {
    try {
      const { title, description, id } = req.body
      const updateGenre = await db.query(
        `UPDATE genres SET title=$1, description=$2
      WHERE id = $3 RETURNING *`,
        [title, description, id]
      )

      res.json(updateGenre.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteGenre(req, res) {
    try {
      const id = req.params.id
      const deleteGenre = await db.query(
        `DELETE FROM genres WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteGenre.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new GenreController()
