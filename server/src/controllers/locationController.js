const db = require('../db')

class LocationController {
  async createLocation(req, res) {
    try {
      const { title, description } = req.body
      const newLocation = await db.query(
        `INSERT INTO genres(title, description) VALUES($1, $2) RETURNING *`,
        [title, description]
      )
      res.json(newLocation.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getLocations(req, res) {
    try {
      const id = req.params.id

      const cities = await db.query(
        `SELECT 
      locations.city AS city, 
      locations.id AS id,
      locations.country_id AS country_id
          FROM locations WHERE country_id = $1`,
        [id]
      )

      res.json(cities.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async updateLocation(req, res) {
    try {
      const { title, description, id } = req.body
      const updateLocation = await db.query(
        `UPDATE genres SET title=$1, description=$2
      WHERE id = $3 RETURNING *`,
        [title, description, id]
      )

      res.json(updateLocation.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteLocation(req, res) {
    try {
      const { id } = req.body
      console.log(id)

      const deleteLocation = await db.query(
        `DELETE FROM locations WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteLocation.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new LocationController()
