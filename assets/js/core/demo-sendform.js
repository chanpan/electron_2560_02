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