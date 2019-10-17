const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function find(dept) {
  return null;
  
  // return db('users')
  // .where({department: dept})
  // .select('id', 'username', 'password', 'department');  
}

function findBy(filter) {
  
  return db('users').where(filter);
}

async function add(user) {
  return null;

  // const [id] = await db('users').insert(user);

  // return findById(id);
}

function findById(id) {
  return null;
  
  // return db('users')
  //   .where({ id })
  //   .first();
}

function remove(id) {
  return db('schemes')
      .where('id', Number(id))
      .del();
}