import {Link} from 'react-router-dom'

export async function createUser(cred) {
    try {
        var response= await fetch('/user/register',{
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(cred)
        })

        if(response.status===200){
            console.log(response.json);
        }
        else{
            console.log(response.json)
        }

    } catch (error) {
        console.log(error)
    }
}

export async function loginApi(email,password){
    console.log("Fired")
    try {
        
        var response= await fetch('/user/login', {
            method : "POST",
            headers: {"Content-type": "application/json"},
            body : JSON.stringify({
                "email": "parbat@gmail.com",
                "password": "123456",
            })

        });

        if(response.status===200){
            console.log(await response.json())
            localStorage.setItem('accessToken', response.json()['token']);
            window.location.href='/home';
        }
        else{
            console.log(await response.json())
        }

    } catch (error) {
        console.log(error)
    }
}