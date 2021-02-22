const {
  date
} = require("../../lib/utils");

const db = require("../../config/db");

module.exports = {
  all(callback) {
    db.query(`
      SELECT *
      FROM recipes
      ORDER BY name ASC`, (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  },

  create(data, callback) {
    const query = `
      INSERT INTO recipes (
        chef_id,
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [
      data.chef,
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      date(Date.now()).iso
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },

  find(id, callback) {
    db.query(`
      SELECT students.*, teachers.name AS teacher_name
      FROM students 
      LEFT JOIN teachers ON (students.teacher_id = teachers.id)
      WHERE students.id = $1`, [id], (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },

  update(data, callback) {
    const query = `
      UPDATE students SET
        name=($1),
        avatar_url=($2),
        email=($3),
        birth=($4),
        school_year=($5),
        class_type=($6),
        workload=($7),
        teacher_id=($8)
      WHERE id = $9
    `;

    const values = [
      data.name,
      data.avatar_url,
      data.email,
      data.birth,
      data.school_year,
      data.class_type,
      data.workload,
      data.teacher,
      data.id
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database error! ${err}`;

      return callback();
    });
  },

  delete(id, callback) {
    db.query(`DELETE FROM students WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Database error! ${err}`;

      return callback();
    });
  },

  teachersSelectOptions(callback) {
    db.query(`SELECT name, id FROM teachers`, (err, results) => {
      if (err) throw `Database error ${err}`;

      callback(results.rows);
    });
  },

  paginate(params) {
    const {
      filter,
      limit,
      offSet,
      callback
    } = params;

    let query = "",
      filterQuery = "",
      totalQuery = `(
        SELECT count(*) FROM students
      ) AS total`;

    if (filter) {
      filterQuery = `
        WHERE students.name ILIKE '%${filter}%'
        OR students.email ILIKE '%${filter}%'
      `;

      totalQuery = `(
       SELECT count(*) FROM students
       ${filterQuery} 
      ) AS total`;
    }

    query = `
      SELECT students.*, ${totalQuery} 
      FROM students
      ${filterQuery}
      LIMIT $1 OFFSET $2
    `;

    db.query(query, [limit, offSet], (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  },

  chefsSelectOptions(callback) {
    db.query(`SELECT name, id FROM chefs`, (err, results) => {
      if (err) throw `Database error ${err}`;

      callback(results.rows);
    });
  },
};