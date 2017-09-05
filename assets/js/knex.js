var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "assets/mydb.db"
  },
  useNullAsDefault: true
}); 
knex.schema.createTableIfNotExists('users', function (table) {
  table.increments('user_id');
  table.string('firstname');
  table.string('lastname');
  table.string('tel');
  table.timestamps();
}).then(function(){
    return knex.insert([
      {firstname: 'nuttaphon',lastname:'sss',tel:"0862229416"},
      {firstname: 'chanpan',lastname:'xxx',tel:"0892229416"}
    ]).into('users');
});
 
 
