
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();

      tbl
        .string('project_name', 200)
        .notNullable()
        .unique()
      tbl
        .string('description', 500)
        .notNullable()

      tbl
        .bit('is_completed')
        .notNullable()

  })
  .createTable('tasks', tbl => {
      tbl.increments();

      tbl
        .string('description', 2000)
        .notNullable()
      
      tbl
        .string('notes', 2000)

      tbl
        .bit('is_completed')
        .notNullable()
      tbl
        .integer('project_id')
        .unsigned().notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
