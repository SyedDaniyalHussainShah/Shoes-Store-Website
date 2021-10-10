var email = document.getElementById('email');
var password = document.getElementById('password');

var email_characters = document.getElementById('email_characters');
var password_characters = document.getElementById('password_characters');

var email_blanked = document.getElementById('email_blanked');
var password_blanked = document.getElementById('password_blanked');

var email_attherate = document.getElementById('email_attherate');

email.addEventListener('textInput',emailVerification,false);
password.addEventListener('textInput',passwordVerification,false);

function validation(){
    
    email_blanked.style.display = "none";
    email_characters.style.display = "none";
    email_attherate.style.display = "none";
    password_blanked.style.display = "none";
    password_characters.style.display = "none";
    
    if(email.value.length==0){
        email.style.border = "2px solid red";
        email_blanked.style.display = "block";
        return false;
    }
    
   else if(email.value.length>0&&email.value.length<10){
        email.style.border = "2px solid red";
        email_characters.style.display = "block";
        return false;
    }
    else if(email.value.search('@')==-1){
        email.style.border = "2px solid red";
        email_attherate.style.display = "block";
        return false;
    }
    
    if(password.value.length==0){
        password.style.border = "2px solid red";
        password_blanked.style.display = "block";
        return false;
    }
    else if(password.value.length>0&&password.value.length<8){
        password.style.border = "2px solid red";
        password_characters.style.display = "block";
        return false;
    }
    
}

function emailVerification(){
    
    if(email.value.length>=0){
        
        email_blanked.style.display = "none";
        
        if(email.value.length>=9){
            
            email_characters.style.display = "none";
        
            if(email.value.search('@')!=-1){
                
                email_attherate.style.display = "none";
                email.style.border = "2px solid #60adde";
                return true;
            }
        }
        
    }
}
    
function passwordVerification(){
    
    if(password.value.length>=0){
        
        password_blanked.style.display = "none";
        
        if(password.value.length>=7){
           
            password_characters.style.display = "none";
            password.style.border= "2px solid #60adde";
            return true; 
        }
             
    }
    
}