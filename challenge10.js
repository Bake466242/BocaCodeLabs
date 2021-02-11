import React, { useState } from 'react'

function NewPersonForm(){
const [firstName, setFirstName] = useState(null)
const [lastName, setLastName] = useState(null)
const [email, setEmail] = useState(null)
const [phone, setPhone] = useState(null)
function FormHandler(e){
    const newPerson = {
        firstName,
        lastName,
        email,
        phone
    }
    e.preventDefault
        }

fetch('https://techtat-api.web.app/candidates', {
  method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newPerson),
})
.then(response => response.json())
.then(data => {
console.log('Success:', data);
})
.catch((error) => {
console.error('Error:', error);
});

    return(
    <form onSubmit={FormHandler}>
    <label for="firstName">First name:</label><br/>
    <input type="text" id={firstName} 
    onChange={(e) => setFirstName(e.target.value)}name="firstName"/><br/>

    <label for="lastName">Last name:</label><br/>
    <input type="text" id={lastName}
    onChange={(e) => setLastName(e.target.value)} name="lastName"/>

    <label for="phone">Phone:</label><br/>
    <input type="tel" id={phone}
    onChange={(e) => setPhone(e.target.value)} phone="phone"/>
        
    <label for="email">Email:</label><br/>
    <input type="email" id={email}
    onChange={(e) => setEmail(e.target.value)} email="email"/>

    <input type="submit" value="Submit"/>
    </form>

    )
}

export default NewPersonForm