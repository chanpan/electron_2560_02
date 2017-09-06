var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "assets/ezform.db" 
  },
  useNullAsDefault: true
});
exports.knexCreateTable = (tables,fields) => {
  return knex.schema.createTableIfNotExists(tables, function (table) {
    for(let i of fields){
        table.string(i.Field);
    }
  });
} 
// knex.schema.createTableIfNotExists('users', function (table) {
//   table.increments('user_id');
//   table.string('firstname');
//   table.string('lastname');
//   table.string('tel');
//   table.timestamps();
// }).then(function(){
//     return knex.insert([
//       {firstname: 'nuttaphon',lastname:'sss',tel:"0862229416"},
//       {firstname: 'chanpan',lastname:'xxx',tel:"0892229416"}
//     ]).into('users');
// });
 
 
