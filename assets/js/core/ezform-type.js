const Htmlhelper = require('./Classes/Htmlhelper.js');
//type===1
exports.TextInput=(values='', inputOptions=[])=>{
    
    $("#show-ezform").html(Htmlhelper.textInput('EZ1504586054049692300[var_firstname]', values, inputOptions=[]));    
}