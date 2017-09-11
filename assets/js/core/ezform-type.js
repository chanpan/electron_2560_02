const Htmlhelper = require('./Classes/Htmlhelper.js');
const MaskInput = require("./Classes/MaskInput.js");
const Button = require("./ezform-button.js");
//type===1
exports.TextInput=(values='', options=[])=>{
    $("#show-ezform").append("<div id='div-type1'></div>");
    $("#div-type1").append(`
    <div class='col-md-6' item-id='ezf_id'>
    <div>`+
        Htmlhelper.label('ชื่อ')+
        Htmlhelper.textInput('EZ1504586054049692300[var_firstname]', values, options=[])+`
    </div>
    </div>    
    `);

    $("#show-ezform").append("<div id='div-type1'></div>");
    $("#div-type1").append(`
    <div class='col-md-6' item-id='ezf_id'>
    <div>`+
        Htmlhelper.label('นามสกุล')+
        Htmlhelper.textInput('EZ1504586054049692300[var_lastname]', values, options=[])+`
    </div>
    </div>    
    `);

    let txts=`
        <div class="col-md-6 col-md-offset-0" id="rowItem" item-id="1501817775062502300" data-dad-id="0">
            <div class="form-group field-sddynamicmodel-varfname">
                <label for="sddynamicmodel-varfname">ชื่อ</label>
                <input type="text" id="sddynamicmodel-varfname" class="form-control" name="SDDynamicModel[varfname]" value="" labeloptions="{&quot;label&quot;:&quot;ชื่อ&quot;}">
                <p class="help-block help-block-error"></p>
            </div>
        </div>
    `;



    $("#show-ezform").append("<div id='div-type2'></div>");
    $("#div-type2").html(`
    <div class='col-md-6' item-id='ezf_id'>
        <div>`+
            Htmlhelper.label('เบอร์โทรศัพท์')+
            MaskInput.maskInput("999-999-9999", "EZ1504586054049692300[var_firstnames]", "086-222-9416", 
            {class:"form-control"}, '')+
        `    
        </div>
    </div>    
    `);
    
    $("#show-ezform").append("<div id='div-ezform-footer-button'></div>");
    $('#div-ezform-footer-button').html(Button.getButton());
       // mask='', name='', value='', options = [], clientOptions = []
}