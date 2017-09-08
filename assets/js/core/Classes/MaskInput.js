const BaseHtml = require("./baseHtml.js");
const HtmlHelper = require("./Htmlhelper.js");
require('./jquery.maskedinput.min.js');
     exports.maskInput = (mask='', name='', value='', options = [], clientOptions = [])=> {
         /*************** Examples
            let clientOptions={....};
            $("#show-ezform").html(MaskInput.maskInput("999-999-9999", "EZ1504586054049692300[var_firstname]", "086-222-9416", {class:"form-control"}, clientOptions));  
         *****************/
            if (options['type'] == "" || options['type'] == null || typeof (options['type']) != 'undefined') {
                  options['type'] = 'text';
            } 
            if (options['class'] != null || typeof (options['class']) != 'undefined') {
                  options['class'] = "form-control " + options['class'];
            } else {
                  options['class'] = 'form-control';
            }


            let id = BaseHtml.getInputId(name);
            options = { "onfocus":'maskId("'+id+'","'+mask+'","'+clientOptions+'")'};
            return HtmlHelper.textInput(name, value, options);
      }
    maskId = (id,mask,clientOptions) =>{
         console.log(id);
         return $(`#${id}`).mask(mask, JSON.stringify(clientOptions));
    }  
