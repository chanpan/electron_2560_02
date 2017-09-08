module.exports = {
    test:()=>{
       let cid = $("#cid").text();
       let fullname = $("#fullname").text();
       let birthday = $("#birthday").text();
       let address =  $("#address").text();
       let img = $("#pImg").text();

       alert(address);
    },
    save: ()=>{
            let cid = $("#cid").text();
            let fullname = $("#fullname").text();
            let birthday = $("#birthday").text();
            let address =  $("#address").text();
            let img = $("#pImg").text();

            var form = new FormData();
            form.append("ezf_id", "1500628215069381400");
            form.append("data", JSON.stringify({"varfirstname":fullname,"varcid":cid,"varbirthday":birthday,"varaddress":address,"sys_lat":11,"sys_lng":12}));
            form.append("target", "1454043308084599600");
            form.append("sitecode", "cid99999");
            form.append("user_id", "engiball");
            form.append("submit", false);

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://www.thaicarecloud.org/api/v1/ultra-sound/create-form",
                "method": "POST",
                "headers": {
                    "x-token": "HreXtADA4KJMP-7QC9wjF5U6NrZS5z84",
                    "cache-control": "no-cache",
                    "postman-token": "971a8843-b812-5599-a4fb-5ff160eeee6b"
                },
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
     }
 }













<!DOCTYPE html>
<html>
<head>
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.thaicarecloud.org/ezforms/ezform-service/get-ezf-table?format=json&tbdata=tbdata_1504586024078967800",
  "method": "GET",
  "headers": {
    "x-token": "549968af6006a2fe6c016bf9070b4899"
  }
}
var arr1=[];
var arr2=[];
var arr3=[];
$.ajax(settings).done(function (response) {
  for(let i of response){
      arr1.push(i.Field);//sqlite
      arr2.push(i.Field);//ezform
  }
  for(let i of arr1){
     $("#show1").append(i+'<br>');
  }
  arr2.push('555');
  for(let i of arr2){
     $("#show2").append(i+'<br>');
  }
      var min='';
      var out=[];
      var cbool=true;
      var num = 0;
      while(cbool==true){
        min=arr1[num];
        if(min != arr2[num]){
            out.push(arr2[num]);
        }
        num++;
        if(num == arr2.length){
            cbool=false;
        }
      }
  for(let i of out){ 
    $('#show3').append(i+"<br>");
  }
  
});



</script>
</head>
<body>

<div class='row'>
    <div class='container'>
        <div class='col-md-6 col-xs-4'>
            <div id='show1'></div>
        </div>
        <div class='col-md-6 col-xs-4'>
            <div id='show2'></div>
        </div>
        <div class='col-md-6 col-xs-4'>
            <div id='show3'></div>
        </div>
    </div>
</div>

</body>
</html>
