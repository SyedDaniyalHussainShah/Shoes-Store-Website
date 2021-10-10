var receiverName = document.getElementById('receiverName');
var address = document.getElementById('address');
var contact = document.getElementById('contact');

var name_Blanked = document.getElementById('name_Blanked');
var address_Blanked = document.getElementById('address_Blanked');
var contact_Blanked = document.getElementById('contact_Blanked');

var address_Characters = document.getElementById('address_Characters');
var contact_Digits = document.getElementById('contact_Digits');

var name_char= document.getElementById("name_char");


var contact_Error= document.getElementById('contact_Error');

receiverName.addEventListener('textInput',nameVerification,false);
address.addEventListener('textInput',addressVerification,false);
contact.addEventListener('textInput',contactVerification,false);
name_char.addEventListener('textInput',name_character,false);


function name_character(){

    if(!isNaN(name_char.value)){
        contact.style.border = "2px solid red";
        contact_Error.style.display = "block";
        return false;


}

function validation(){
    

    name_Blanked.style.display = "none";
    address_Blanked.style.display = "none";
    contact_Blanked.style.display = "none";
    address_Characters.style.display = "none";
    contact_Digits.style.display = "none";
    contact_Error.style.display = "none";
    
    if(receiverName.value.length==0){
        receiverName.style.border = "2px solid red";
        name_Blanked.style.display = "block";
        return false;
    }
    
    if(address.value.length==0){
        address.style.border = "2px solid red";
        address_Blanked.style.display = "block";
        return false;
    }
    else if(address.value.length>0&&address.value.length<20){
        address.style.border = "2px solid red";
        address_Characters.style.display = "block";
        return false;
    }
    if(isNaN(contact.value)){
        contact.style.border = "2px solid red";
        contact_Error.style.display = "block";
        return false;
    }
    else if(contact.value.length==0){
        contact.style.border = "2px solid red";
        contact_Blanked.style.display = "block";
        return false;
    }
    else if(contact.value.length>0&&contact.value.length<8){
        contact.style.border = "2px solid red";
        contact_Digits.style.display = "block";
        return false;
    }
}

function nameVerification(){
    
    if(receiverName.value.length>=0){
        name_Blanked.style.display = "none";
        receiverName.style.border= "2px solid #60adde";
        return true;
    }
    
}

function addressVerification(){
    
    if(address.value.length>=0){
        address_Blanked.style.display = "none";
        
        if(address.value.length>=19){
        address_Characters.style.display = "none";
        address.style.border= "2px solid #60adde";
        return true;
        }
    }
    
}

function contactVerification(){
    
    if(!isNaN(contact.value)){
        contact_Error.style.display = "none";
        if(contact.value.length>=0){
            contact_Blanked.style.display = "none";
        
            if(contact.value.length>=7){
            contact_Digits.style.display = "none";
            contact.style.border= "2px solid #60adde";
            return true;
            }
        }
    }
}