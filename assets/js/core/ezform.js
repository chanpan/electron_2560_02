/************ Observable rxjs *****************/
var Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');

/********** knex.js ************/
var knexRemote = require('../knex.js');

/*********** url thaicarecloud *************/
var url="https://www.thaicarecloud.org/ezforms/ezform-service/";

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

exports.CreateTable=(data)=>{
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": `${url}get-ezf-table?format=json&tbdata=${data[0].ezf_table}`,
        "method": "GET",
        "headers": {
            "x-token": "549968af6006a2fe6c016bf9070b4899",
        }
      }
      $.ajax(settings).done(function (res) {
        knexRemote.knexCreateTable(data[0].ezf_table,res).then((res)=>{})
        .catch((err)=>{});
      });    
}//Create tbdata_ezf_id