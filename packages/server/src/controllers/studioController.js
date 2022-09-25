const db = require('../db')

class StudioController {
  async createStudio(req, res) {
    try {
      const { title, found_year, logo, city } = req.body

      const newStudio = await db.query(
        `
       
        INSERT INTO studios
        (title, found_year, logo, location_id)
        VALUES($1, $2, $3, (SELECT id FROM locations WHERE city=$4)) RETURNING *
        
        `,
        [title, found_year, logo, city]
      )

      res.json(newStudio.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getStudios(req, res) {
    try {
      const studios = await db.query(
        `SELECT studios.id AS id, 
        studios.title AS title, logo, found_year, locations.city AS city, nationalities.description AS country FROM studios 
        LEFT JOIN locations
        ON studios.location_id = locations.id
        LEFT JOIN nationalities 
        ON locations.country_id = nationalities.id
        
        `
      )

      res.json(studios.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async updateStudio(req, res) {
    try {
      const { title, found_year, logo, city, id } = req.body
      const updateStudio = await db.query(
        `UPDATE studios SET title=$1, found_year=$2, logo=$3, location_id=(SELECT id FROM locations WHERE city=$4)
      WHERE id = $5 RETURNING *`,
        [title, found_year, logo, city, id]
      )

      res.json(updateStudio.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteStudio(req, res) {
    try {
      const id = req.params.id
      const deleteStudio = await db.query(
        `DELETE FROM studios WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteStudio.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  // async getStudioById(req, res) {
  //   try {
  //     const { id } = req.params
  //     const studio = await db.query(
  //       `SELECT * FROM studios WHERE id = $1 RETURNING *`,
  //       [id]
  //     )
  //     res.json(studio.rows[0])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}

module.exports = new StudioController()
