const db = require('../db')

class NationalityController {
  async createNationality(req, res) {
    try {
      const { title, description } = req.body
      const newNationality = await db.query(
        `INSERT INTO nationalities(title, description) VALUES($1, $2) RETURNING *`,
        [title, description]
      )
      res.json(newNationality.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getNationalities(req, res) {
    try {
      const nationalities = await db.query(`SELECT * FROM nationalities`)

      res.json(nationalities.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async getNationalityById(req, res) {
    try {
      const { id } = req.params
      const nationality = await db.query(
        `SELECT * FROM nationalities WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(nationality.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async updateNationality(req, res) {
    try {
      const { title, description, id } = req.body
      const updateNationality = await db.query(
        `UPDATE nationalities SET title=$1, description=$2
      WHERE id = $3 RETURNING *`,
        [title, description, id]
      )

      res.json(updateNationality.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteNationality(req, res) {
    try {
      const id = req.params.id
      const deleteNationality = await db.query(
        `DELETE FROM nationalities WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteNationality.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new NationalityController()
