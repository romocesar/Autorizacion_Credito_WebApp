//Get User and Password from Database
const user_general = "User";
const pass_general = "Pass";

//Check if user exists
document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){
        if (document.getElementById("username") == user_general) {
            //Check if password matches
            document.getElementById("verify").innerHTML = "Verificando credenciales ...";
            if(document.getElementById("password") == pass_general){
        
            }
            else{
        
            }    
        }
        else{
            
        }
    }    
});
