import {Link} from 'react-router-dom'

export async function createUser(cred) {
    
}

export async function loginApi(email,password){
    console.log("Fired")
    // console.log(email+ "  " +password)
    fetch('https://restapi.wiestellservices.com/rest/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer JZ7EI6X4MH5ZCU8QQUKL7G1W3PEP58EP`,
        },
        body: JSON.stringify({
                
                "email": "test67@gmail.com",
                "password": "1234567",
                
            }),
      })
      .then((response) => response.json())
  .then((result) => {
    console.log('API response:', result); // Log the response data
  
    if (result.token) {
      // User logged in successfully
     
      fetchAccountInfo(result.token);
    } else if (result.error) {
      console.error('Login failed:', result.error); // Display the specific error message from the API
    } else {
      console.error('Login failed: Unexpected response'); // Display a generic error message if the response format is unexpected
    }
  })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    const fetchAccountInfo = (token) => {
      const accountInfoUrl = 'https://restapi.wiestellservices.com/rest/accountInfo';
  
      fetch(accountInfoUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}

