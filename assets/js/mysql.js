var Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'Chanpan07',
    database : 'dpmcloud'
  }
});
exports.selectAllUser = ()=>{
  return  new Observable(observer=>{
      try{
        var xxx = knex('_users').select('firstname','lastname').map((row)=> {
          observer.next(row); 
        });
        //observer.complete();
      }catch(ex){
         observer.error(ex);
      }
  }); 
}
exports.insertUser = () => {
  return knex
    .insert([
      { firstname: "drwrt", lastname: "etert", tel: "0862229416" },
      { firstname: "gdfgdg", lastname: "etertertet", tel: "0892229416" }
    ])
    .into("_users");
};
// knex.schema.createTableIfNotExists('_users', function (table) {
//   table.increments('user_id');
//   table.string('firstname');
//   table.string('lastname');
//   table.string('tel');
//   table.timestamps();
// })
// .then(function(){
//     return knex.insert([
//       {firstname: 'nuttaphon',lastname:'sss',tel:"0862229416"},
//       {firstname: 'chanpan',lastname:'xxx',tel:"0892229416"}
//     ]).into('_users');
// })
// .then(function() {
//   return knex('_users')
//         .select('firstname','lastname');
// })
// // .map over the results 
// .map(function(row) {
//   console.log(row);
// })
// // Finally, add a .catch handler for the promise chain 
// .catch(function(e) {
//   console.error(e);
// });