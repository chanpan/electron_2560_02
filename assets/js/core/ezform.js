/************ Observable rxjs *****************/
var Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');

/********** knex.js ************/
var knexRemote = require('../sql/knex-sqlite3.js');

/*********** url thaicarecloud *************/
var url="https://www.thaicarecloud.org/ezforms/ezform-service/";


/*********** ezform-type *************/
var ezformType = require('./ezform-type.js');


/*********** ทำหน้าที่ get ezform_fields *************/
exports.GetEzform = (ezf_id)=>{
    return new Observable(ob=>{
        let settings = {
            "async": true,
            "crossDomain": true,
            "url":url+'get-ezform?ezf_id='+ezf_id,
            "method": "GET",
            "headers": {
              "x-token": "549968af6006a2fe6c016bf9070b4899",
            },
          };
        $.ajax(settings).done(function (response) {
            ob.next(response);
        }).fail(function (jqXHR, textStatus) {
            ob.error(+jqXHR.status + ' ' +jqXHR.statusText);
        });  
    });
}//get EzformField

exports.CreateTableEzformFieldToLocal = (table="",field, values=[])=>{
    if(table == ""){
        table == "ezform_fields";
    }
    field=['ezf_field_id','ezf_field_name','ezf_field_type','ezf_field_lenght','ezf_field_label'];

    knexRemote.knexCreateTableIfNotExists(table, field)
    .then(res=>{
        knexRemote.KnexAlterUnique(table,'ezf_field_id').then(()=>console.log("unique ezf_field_id success"));
        for(let i of values.ezfields){

            let val = {
                'ezf_field_id':i.ezf_field_id,
                'ezf_field_name':i.ezf_field_name,
                'ezf_field_type':i.ezf_field_type,
                'ezf_field_lenght':i.ezf_field_lenght,
                'ezf_field_label':i.ezf_field_label 
            };
           
            knexRemote.knexInsertColumToLocal(table, val)
            .then(res=>console.log("INSERT "+table+" success."))
            .catch(err=>console.log(err));
        }
    })
    .catch(err=>console.log("Create table "+table+" Error.")); 
}//Ezform create table to local ezform_fields


/*********** ทำหน้าที่ สร้าง table tbdata ใน local *************/
exports.CreateTableTbdata=(data)=>{
    let settings = {
        "async": true,
        "crossDomain": true,
        "url":url+"get-ezf-table?format=json&tbdata="+data.ezfields[0]['ezf_table'],
        "method": "GET",
        "headers": {
            "x-token": "549968af6006a2fe6c016bf9070b4899",
        }
      }
      $.ajax(settings).done(function (fields) {
        let field=[];
        for(let i of fields){
            field.push(i.Field);
        }
        let tables = data.ezfields[0]['ezf_table'];
        knexRemote.knexCreateTableIfNotExists(tables,field,'id')
        .then((res)=>{
           console.log("Create tbdata_"+data.ezform.ezf_id+" success.");
        })
        .catch(err=>console.log(err));
         
        // knexRemote.knexGetColumnSqlite3(data.ezfields[0]['ezf_table']).then((res)=>{
        //     console.log(res);
        //     for(let i of res){
        //         console.log(i.name);
        //     } 
        // })
        // .catch((err)=>{$('#show').html("<div class='alert alert-danger'>"+err+"</div>")});
      });    
}//Create tbdata_ezf_id

exports.EzformCheckType = (data,value='')=>{
    $("#show-ezform-container").show(); //แสดง well 
     for(let ezfield of data.ezfields){
        if(ezfield.ezf_field_type == 0){//type ==0 hidden field
            //console.log(ezfield);
        }else if(ezfield.ezf_field_type == 1){ // type==1 textinput
             
            let options = {
                lenghts:'col-md-'+ezfield.ezf_field_lenght,
                ezf_field_id:ezfield.ezf_field_id,
                varname:ezfield.ezf_field_name,
                ezf_id:data.ezform.ezf_id,
                ezf_field_name:ezfield.ezf_field_name
            };
            ezformType.TextInput(value, ezfield.ezf_field_label, options,'');
            console.log(data);
            //ezformType.TextInput();
        }

     }

     
}


/** 
 * for each key value 
 *  var f = [{fname:'nuttaphon', lname:'chanpan'}];
   for(let i in f){
   	console.log(Object.keys(f[i]));
   }
 * **/