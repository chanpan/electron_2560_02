var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "assets/ezform.db"  
  },
  useNullAsDefault: true
});//knex connection sqlite3

exports.knexCreateTableIfNotExists = (tables,fields) => {
  //alter table array2 ตัว สำหรับเช็คค่า
  /**********  Example
      var knexRemote = require('../sql/knex-sqlite3.js'); 
      let fields = [{Field:'id'},{Field:'name'}];
      knexRemote.knexCreateTableIfNotExists('1504586024078967800',fields)
      .then((res)=>{
          ........
      }).catch(err=>{console.log(err)}); 
   **********/
  return knex.schema.createTableIfNotExists(tables, function (table) {
    for(let i of fields){
        table.text(i.Field,'longtext');
    }
  });
}//CreateTable

exports.knexAlterTableAdd = (tables,fields,types='longtext')=>{ 
  /**********  Example
      var knexRemote = require('../sql/knex-sqlite3.js'); 
      knexRemote.knexAlterTableAdd('1504586024078967800','id','integer')
      .then((res)=>{
          ........
      }).catch(err=>{console.log(err)}); 
   **********/
  return knex.schema.alterTable(tables, function(table) {
    table.text(fields,types);
  });
}//AlterTableAdd

exports.knexAlterDropColumn = (tables,fields)=>{
  /**********  Example
      var knexRemote = require('../sql/knex-sqlite3.js'); 
      knexRemote.knexAlterDropColumn('1504586024078967800','firstname')
      .then((res)=>{
          ........
      }).catch(err=>{console.log(err)}); 
   **********/ 
  return knex.schema.alterTable(tables, function(table) {
    table.dropColumn(fields);
  });
}//Alter Drop Column

exports.knexDropTable = (tables)=>{
  /**********  Example
      var knexRemote = require('../sql/knex-sqlite3.js'); 
      knexRemote.knexDropTable('1504586024078967800')
      .then((res)=>{
        ........
      }).catch(err=>{console.log(err)}); 
   **********/
  return knex.schema.dropTable(tables);
}//DropTable

exports.knexDropTableIfExists = (tables)=>{
    /**********  Example
      var knexRemote = require('../sql/knex-sqlite3.js'); 
      knexRemote.knexDropTableIfExists('1504586024078967800')
      .then((res)=>{
            for(let i of res){
                console.log(i.name);
            } 
      }).catch(err=>{console.log(err)}); 
   **********/
  return knex.schema.dropTableIfExists(tables)
}//DropTableIfExists

exports.knexGetColumnSqlite3 = (tables)=>{
   /**********  Example
      var knexRemote = require('../sql/knex-sqlite3.js'); 
      knexRemote.knexGetColumnSqlite3('1504586024078967800')
      .then((res)=>{
            for(let i of res){
                console.log(i.name);
            } 
      }).catch(err=>{console.log(err)}); 
   **********/
   return knex.raw("PRAGMA table_info("+tables+")");
}//GetColumnSqlite3














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
 
 
