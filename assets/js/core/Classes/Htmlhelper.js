const BaseHtml = require('./baseHtml.js');

exports.label = (name, options=[]) =>{
    let strattr = BaseHtml.renderAttribute(options);  
    if(Object.keys(options).length === 0){
         //options
         strattr = "";
    }  
    return `<label ${strattr}>${name}</label>`;
 }//
exports.textInput = (name, value = null, options=[])=>{
    
    if(options['type']=="" || options['type']==null || typeof(options['type']) != 'undefined'){
        options['type']='text';
    }
    if(options['class'] != null || typeof(options['class']) != 'undefined'){
        options['class'] = "form-control "+options['class'];
    }else{
        options['class']='form-control';
    }
    options['name']=name;
    options['id']= BaseHtml.getInputId(name);

    
    options['value'] = value;
    let strattr = BaseHtml.renderAttribute(options); 
    return BaseHtml.tag('input', strattr); 
 }//TextInput  //return `<input ${name} ${strattr}>`; <input type='text' name

 exports.hiddenInput = (name, value = null, options=[])=>{
    if(options['type']=="" || options['type']==null || typeof(options['type']) != 'undefined'){
         options['type']='hidden';
    }
    options['name']=name;
    options['id']= BaseHtml.getInputId(name);
    options['value'] = value;
    let strattr = BaseHtml.renderAttribute(options); 
    return BaseHtml.tag('input', strattr); 
 }//TextInput 