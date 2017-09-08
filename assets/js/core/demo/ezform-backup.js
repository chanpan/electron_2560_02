var Observable = require('rxjs/Observable').Observable;
var knexRemote = require('../knex.js');

require('rxjs/add/observable/of');
require('rxjs/add/operator/map');
var url="https://www.thaicarecloud.org/ezforms/ezform-service/";
 

exports.GetEzform = (ezf_id)=>{
    return new Observable(ob=>{
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `${url}get-ezform?ezf_id=${ezf_id}`,
            "method": "GET",
            "headers": {
              "x-token": "549968af6006a2fe6c016bf9070b4899",
              "cache-control": "no-cache",
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
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `${url}get-ezf-table?format=json&tbdata=${data[0].ezf_table}`,//;"http://dpmcloud.dev/ezforms/ezform-service/get-ezf-table?format=json&tbdata=tbdata_1504586024078967800",
        "method": "GET",
        "headers": {
          "cache-control": "no-cache"
        }
      }
      $.ajax(settings).done(function (res) {
        knexRemote.knexCreateTable(data[0].ezf_table,res).then((res)=>{

        })
        .catch((err)=>{

        });
      });    
}//Create tbdata_xxx
exports.SaveEzform=(ezf_id)=>{
    return new Observable(ob=>{
        var form = new FormData();
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": `${url}create-form`,
          "method": "GET",
          "headers": {
            "x-token": "549968af6006a2fe6c016bf9070b4899",
            "cache-control": "no-cache",
            "postman-token": "b106272e-649c-9699-9276-f40b9a6bc1cf"
          },
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
        }
        
        $.ajax(settings).done(function (response) {
            ob.next(response);
        }).fail(function (jqXHR, textStatus) {
            xxx;
        });
    });
}//save ezform