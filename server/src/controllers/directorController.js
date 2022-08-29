const db = require('../db')

class DirectorController {
  async createDirector(req, res) {
    try {
      const { full_name, birth_year, death_year, nationality, photo } = req.body
      const newDirector = await db.query(
        `INSERT INTO directors
        (full_name, birth_year, death_year, national_id, photo)
         VALUES($1, $2, $3, (SELECT id FROM nationalities WHERE description = $4), $5) RETURNING *`,
        [full_name, birth_year, death_year, nationality, photo]
      )
      res.json(newDirector.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getDirectors(req, res) {
    try {
      const directors = await db.query(`SELECT 
        directors.id AS id,full_name, birth_year, death_year, photo, nationalities.description AS nationality 
        FROM directors LEFT JOIN nationalities 
        ON national_id = nationalities.id`)

      res.json(directors.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async getDirectorById(req, res) {
    try {
      const { id } = req.params
      const director = await db.query(
        `SELECT * FROM directors WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(director.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async updateDirector(req, res) {
    try {
      const { full_name, birth_year, death_year, nationality, photo, id } =
        req.body
      const updateDirector = await db.query(
        `UPDATE directors SET full_name=$1, birth_year=$2, death_year=$3, national_id=(SELECT id FROM nationalities WHERE description = $4), photo=$5
      WHERE id = $6 RETURNING *`,
        [full_name, birth_year, death_year, nationality, photo, id]
      )

      res.json(updateDirector.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteDirector(req, res) {
    try {
      const id = req.params.id
      const deleteDirector = await db.query(
        `DELETE FROM directors WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteDirector.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new DirectorController()
