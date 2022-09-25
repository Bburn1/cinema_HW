const db = require('../db')

class ActorController {
  async createActor(req, res) {
    try {
      const { full_name, birth_year, death_year, nationality, photo } = req.body
      const newActor = await db.query(
        `INSERT INTO actors
        (full_name, birth_year, death_year, national_id, photo)
         VALUES($1, $2, $3, (SELECT id FROM nationalities WHERE description = $4), $5) RETURNING *`,
        [full_name, birth_year, death_year, nationality, photo]
      )
      res.json(newActor.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async getActors(req, res) {
    try {
      const actors = await db.query(`SELECT 
        actors.id AS id,full_name, birth_year, death_year, photo, nationalities.description AS nationality 
        FROM actors LEFT JOIN nationalities 
        ON national_id = nationalities.id`)

      res.json(actors.rows)
    } catch (error) {
      console.log(error)
    }
  }

  //
  //
  //
  //
  //

  async getActorById(req, res) {
    try {
      const { id } = req.params
      const actor = await db.query(
        `SELECT * FROM actors WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(actor.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async updateActor(req, res) {
    try {
      const { full_name, birth_year, death_year, nationality, photo, id } =
        req.body
      const updateActor = await db.query(
        `UPDATE actors SET full_name=$1, birth_year=$2, death_year=$3, national_id=(SELECT id FROM nationalities WHERE description = $4), photo=$5
      WHERE id = $6 RETURNING *`,
        [full_name, birth_year, death_year, nationality, photo, id]
      )

      res.json(updateActor.rows[0])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteActor(req, res) {
    try {
      const id = req.params.id
      const deleteActor = await db.query(
        `DELETE FROM actors WHERE id = $1 RETURNING *`,
        [id]
      )
      res.json(deleteActor.rows[0])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ActorController()
