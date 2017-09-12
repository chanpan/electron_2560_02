exports.getInputName = (ezfield)=>{
    //return EZ{ezf_id}[{ezf_field_name}] EZ010000[var_name]
    //let names = `name='${name}'`;
    return `EZ${ezfield.ezf_field_id}[${ezfield.ezf_field_name}]`;
}//get Name ezform  

exports.getInputId = (name)=>{
    //EZ010000[var_name]  ezf010000-txtid
    let res = '';
    for(let i=0; i<name.length; i++){
        res = name.replace('[]', '');
        res = res.replace('][', '-');
        res = res.replace('[', '-');
        res = res.replace(']', '');
        res = res.replace(' ', '-');
        res = res.replace('.', '-');            
    }
    return res.toLocaleLowerCase();
}//get id ezform 

exports.renderAttribute = (options)=>{
    let option = "";
    for(let attr in options){
        option += `${attr}='${options[attr]}' `;
    }
    return option;
}//renderAttribute 
exports.tag = (name ,options)=>{
    return `<${name} ` + options + '>';
}//tag