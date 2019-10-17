exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('name', 128)
      .notNullable()

    // users.string('password', 128).notNullable();

    // users
    // .string('department', 128)
    // .notNullable();
    

  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
