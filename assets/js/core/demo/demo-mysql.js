var mysql = require("./assets/js/mysql.js");
mysql.insertUser().then((res)=>{
    show();
}).catch(err=>{
    $('#show').html("<div class='alert alert-danger'>"+err+"</div>");
})
show = function(){
    mysql.selectAllUser().subscribe(
        (next)=>{
            $('#show').append(next.firstname+" "+next.lastname+"<br>");
        },
        (err)=>{ $('#show').html("<div class='alert alert-danger'>"+err+"</div>");}
    );
}