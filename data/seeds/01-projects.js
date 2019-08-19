
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'Graduate Lambda School',
          description: 'how to pass lambda schools rigorous program',
          is_completed: 0
        },
        {
          project_name: 'graduate college',
          description: 'how to get the most of your four years while getting a degree',
          is_completed: 1
        }
      ]);
    });
};
