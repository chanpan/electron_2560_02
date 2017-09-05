var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "assets/db.db"
  },
  useNullAsDefault: true
}); 
knex.schema.createTableIfNotExists('users', function (table) {
  table.increments();
  table.string('firstname');
  table.string('lastname');
  table.string('tel');
  table.timestamps();
}).then(function(){
    return knex.insert([{name: 'nuttaphon'},{name:'rattana'}]).into('users');
});
 
 
