const BaseHtml = require("./baseHtml.js");
const HtmlHelper = require("./Htmlhelper.js");
require('./jquery.maskedinput.min.js');
     exports.MaskInput(mask='', name='', value='', options = [], clientOptions = []) {
            if (options['type'] == "" || options['type'] == null || typeof (options['type']) != 'undefined') {
                  options['type'] = 'text';
            } 
            if (options['class'] != null || typeof (options['class']) != 'undefined') {
                  options['class'] = "form-control " + options['class'];
            } else {
                  options['class'] = 'form-control';
            }


            let id = BaseHtml.getInputId(name);
            options = { "onfocus": "$(`#${id}`).mask(`" + mask + "`,`" + JSON.stringify(clientOptions) + "`)" };
            return HtmlHelper.textInput(name, value, options);
      }