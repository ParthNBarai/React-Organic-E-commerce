export  async function  getProducts() {
    try {
       
        var response= await fetch('/product/get',{
            method: "GET",
            headers: {"Content-Type": "application/json", "token": localStorage.getItem('auth-token')},
           
        })
        
        const data= await response.json()

        return data;


    } catch (error) {
        console.log(error)
    }
}