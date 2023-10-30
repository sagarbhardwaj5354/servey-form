function clearerror(){
    error=document.getElementsByClassName('formerror')[0].innerHTML=error;

}
function seterror(id,error){
    //seterror using this method
    element=document.getElementById(id);
    element.getElementsByClassName('formerror');
    for(let item of error){
        innerHTML="";
    }

}
function validateform(){
    clearerror();
    var returnval=true;
    var name=document.forms['myform']["fname"].value;
    if(name.length<=3){
        seterror("name","Length of name is to short");
        returnval=false;
    }
    var email=document.forms['myform']["femail"].value;
    if(email.length<=15){
        seterror("email","Length of email is to long");
        returnval=false;
    }
    var fphone=document.forms['myform']["fphone"].value;
    if(fphone.length!=10){
        seterror("fphone","Length of mobile should be be10 digits");
        returnval=false;
    }
    var password=document.forms['myform']["password"].value;
    if(password.length!=8){
        seterror("password","Length of password should be be10 digits");
        returnval=false;
    }
     return returnval;

}