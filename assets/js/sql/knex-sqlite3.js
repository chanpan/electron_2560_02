var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "assets/ezform.db"  
  },
  useNullAsDefault: true
});//knex connection sqlite3

exports.knexCreateTableIfNotExists = (tables,columns,primary=[]) => {
  return knex.schema.createTableIfNotExists(tables, function (table) {
    if(primary == '' || primary.length == 0){
        primary='id';  
        table.increments(primary);    
    }else{
       table.primary(primary);
    }
     
    for(let i of columns){
        table.text(i,'longtext').collate('utf8_unicode_ci').comment(i).nullable();
    }
    
  });
}//CreateTable

exports.knexAlterAddColumn = (tables,columns,types='longtext')=>{ 
  return knex.schema.alterTable(tables, function(table) {
    table.text(columns,types);
  });
}//AlterTableAdd
exports.knexAlterRenameColumn = (tables,columns, to)=>{
   return knex.schema.alterTable(tables, function(table){
      table.renameColumn(columns, to)
   });
}
exports.knexAlterDropColumn = (tables,fields)=>{
  return knex.schema.alterTable(tables, function(table) {
    table.dropColumn(fields);
  });
}//Alter Drop Column

exports.knexDropTable = (tables)=>{
  return knex.schema.dropTable(tables);
}//DropTable

exports.knexDropTableIfExists = (tables)=>{
  return knex.schema.dropTableIfExists(tables)
}//DropTableIfExists

exports.knexGetColumnSqlite3 = (tables)=>{
   return knex.raw("PRAGMA table_info("+tables+")");
}//GetColumnSqlite3


exports.KnexAlterUnique = (tables, fields) =>{
 // t.string('email').unique().collate('utf8_unicode_ci');
  return knex.schema.alterTable(tables, function(table) {
    table.unique(fields);
  });
}
exports.KnexAlterPrimaryKey = (tables, fields) =>{
  // t.string('email').unique().collate('utf8_unicode_ci');
   return knex.schema.alterTable(tables, function(f) {
     f.primary(fields);
   });
 }

//////////////////////////////////////////////////// Insrt table =///////////////////////////////////////////////////////
exports.knexInsertColumToLocal = (table,data) => {
  return knex.insert(data).into(table);
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
 
 
