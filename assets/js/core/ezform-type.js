const Htmlhelper = require('./Classes/Htmlhelper.js');
const MaskInput = require("./Classes/MaskInput.js");
const Button = require("./ezform-button.js");
//type===1
exports.TextInput=(values='', options=[])=>{
    $("#show-ezform").append("<div id='type1'></div>");

    $("#type1").html(`
    <div class='col-md-6' item-id='ezf_id'>
    <div>`+
        Htmlhelper.textInput('EZ1504586054049692300[var_firstname]', values, options=[])+`
    </div>
    </div>    
    `);

    $("#show-ezform").append("<div id='type2'></div>");
    $("#type2").html(`
    <div class='col-md-6' item-id='ezf_id'>
        <div>`+
            MaskInput.maskInput("999-999-9999", "EZ1504586054049692300[var_firstnames]", "086-222-9416", 
            {class:"form-control"}, '')+
        `    
        </div>
    </div>    
    `);
    
    $("#show-ezform").append("<div id='ezform-footer-button'></div>");
    $('#ezform-footer-button').html(Button.getButton());
       // mask='', name='', value='', options = [], clientOptions = []
}