var email = document.getElementById('email');
var password = document.getElementById('password');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');

var email_Characters = document.getElementById('email_Characters');
var password_Characters = document.getElementById('password_Characters');

var email_Blanked = document.getElementById('email_Blanked');
var password_Blanked = document.getElementById('password_Blanked');
var firstName_Blanked = document.getElementById('firstName_Blanked');
var lastName_Blanked = document.getElementById('lastName_Blanked');

var email_AtTheRate = document.getElementById('email_AtTheRate');

email.addEventListener('textInput',emailVerification,false);
password.addEventListener('textInput',passwordVerification,false);
firstName.addEventListener('textInput',firstNameVerification,false);
lastName.addEventListener('textInput',lastNameVerification,false);

function validation(){
    
    email_Blanked.style.display = "none";
    email_Characters.style.display = "none";
    email_AtTheRate.style.display = "none";
    password_Blanked.style.display = "none";
    password_Characters.style.display = "none";
    firstName_Blanked.style.display = "none";
    lastName_Blanked.style.display = "none";
    
    if(firstName.value.length==0){
        firstName.style.border = "2px solid red";
        firstName_Blanked.style.display = "block";
        return false;
    }
    
    if(lastName.value.length==0){
        lastName.style.border = "2px solid red";
        lastName_Blanked.style.display = "block";
        return false;
    }
    
    if(email.value.length==0){
        email.style.border = "2px solid red";
        email_Blanked.style.display = "block";
        return false;
    }
    
   else if(email.value.length>0&&email.value.length<10){
        email.style.border = "2px solid red";
        email_Characters.style.display = "block";
        return false;
    }
    else if(email.value.search('@')==-1){
        email.style.border = "2px solid red";
        email_AtTheRate.style.display = "block";
        return false;
    }
    
    if(password.value.length==0){
        password.style.border = "2px solid red";
        password_Blanked.style.display = "block";
        return false;
    }
    else if(password.value.length>0&&password.value.length<8){
        password.style.border = "2px solid red";
        password_Characters.style.display = "block";
        return false;
    }
    
    
}

function firstNameVerification(){
    
    if(firstName.value.length>=0){
        firstName_Blanked.style.display = "none";
        firstName.style.border= "2px solid #60adde";
        return true;
    }
    
}

function lastNameVerification(){
    
    if(lastName.value.length>=0){
        lastName_Blanked.style.display = "none";
        lastName.style.border= "2px solid #60adde";
        return true;
    }
    
}

function emailVerification(){
    
    if(email.value.length>=0){
        
        email_Blanked.style.display = "none";
        
        if(email.value.length>=9){
            
            email_Characters.style.display = "none";
        
            if(email.value.search('@')!=-1){
                
                email_AtTheRate.style.display = "none";
                email.style.border = "2px solid #60adde";
                return true;
            }
        }
        
    }
}
    
function passwordVerification(){
    
    if(password.value.length>=0){
        
        password_Blanked.style.display = "none";
        
        if(password.value.length>=7){
           
            password_Characters.style.display = "none";
            password.style.border= "2px solid #60adde";
            return true; 
        }
             
    }
    
}

