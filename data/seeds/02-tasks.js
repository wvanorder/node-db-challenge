
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'read the TK nightly',
          notes: 'just, read the freaking TK, person.',
          is_completed: 0,
          project_id: 1
        },
        {
          description: 'pass the sprints',
          notes: 'finish within the three hours with an mvp product.',
          is_completed: 0,
          project_id: 1
        },
        {
          description: 'walk across the stage',
          notes: 'revel in the moment of what you just accomplished',
          is_completed: 1,
          project_id: 2
        }
      ]);
    });
};
