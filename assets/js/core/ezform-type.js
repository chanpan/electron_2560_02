const Htmlhelper = require('./Classes/Htmlhelper.js');
const MaskInput = require("./Classes/MaskInput.js");
const baseHtml = require("./Classes/baseHtml.js");
const Button = require("./ezform-button.js");
//const MaskInput = require("./Classes/MaskInput.js");
//type===1 TextInput
exports.TextInput=(values='', label='', options=[], selected='')=>{
    let input = "";
        input += '<div class="col-md-'+options.lenghts+'" id="rowItem" item-id="'+options.ezf_field_id+'">';
        input += '<div class="form-group field-"'+options.varname+'">';
        input += Htmlhelper.label(label);
        let ezfield = {ezf_field_id:options.ezf_field_id, ezf_field_name:options.ezf_field_name};
    let inputName = baseHtml.getInputName(ezfield);// 'EZ1504586054049692300[var_firstname]'; 
    
        try{delete options.specific;}catch(e){}

        input += Htmlhelper.textInput(inputName, values, options=[]);
        input += '<p class="help-block help-block-error"></p>';
        input += '</div></div>';

        if(selected == ''){
            selected = 'show-ezform';
        }
        $("#"+selected).append(input);  
}
//type==  MaskInput
// exports.MaskInput = (values='', label='', ezf_id='', options=[], clientOptions=[])=>{
//     $("#show-ezform").append("<div id='div-type2'></div>");
//     $("#div-type2").html(`
//     <div class='col-md-6' item-id='ezf_id'>
//         <div>`+
//             Htmlhelper.label('เบอร์โทรศัพท์')+
//             MaskInput.maskInput("999-999-9999", "EZ1504586054049692300[var_firstnames]", "086-222-9416", 
//             {class:"form-control"}, '')+
//         `    
//         </div>
//     </div>    
//     `);
    
//        // mask='', name='', value='', options = [], clientOptions = []
// }
//Button
exports.Button = () =>{
    $("#show-ezform").append("<div id='div-ezform-footer-button'></div>");
    $('#div-ezform-footer-button').html(Button.getButton());
    
}







