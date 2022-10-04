import {Link} from 'react-router-dom'

export async function createUser(cred) {
    
}

export async function loginApi(email,password){
    console.log("Fired")
    // console.log(email+ "  " +password)
    try {
        
        var response= await fetch('/user/login', {
            method : "POST",
            headers: {"Content-type": "application/json"},
            body : JSON.stringify({
                "email": email,
                "password": password,
            })

        });

        if(response.status===200){
            const json= await response.json();
            console.log( json.token)
            
            localStorage.setItem('auth-token',json.token);
            window.location.href='/home';
        }
        else{
            console.log(await response.json())
        }

    } catch (error) {
        console.log(error)
    }
}