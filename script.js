
document.addEventListener('DOMContentLoaded', function(){
document.getElementById('login-form').addEventListener('submit', async function(event){
    event.preventDefault();
    //to prevent refresh and default button behaviour
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    //extract the email and password from the form
    const email = "aaaaabffobfdddoa@haha.com";
    const age= 18;
    const data = {
        username,
        email,
        password,
        age
    }

    //create the data object to send to the server
    try{
        const response = await fetch('https://ecommerce-api-accio.vercel.app/api/auth/signup', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) { // Check if response is okay
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        printResult(result);
        console.log(result);
        // localStorage.setItem('token', result.accessToken);
        // //save the token in the local storage
        // window.location.href = 'home.html';
        // //redirect to the home page
        
    }

    catch(error){
        console.log(error);
    }
})
});

// document.addEventListener('DOMContentLoaded', function(){
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log(error));
// });

function printResult(result){
    document.getElementById('result').innerHTML = `
    <p> ${result.user.email} </p>
    `;
}