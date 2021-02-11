app.post('/candidates', newPerson)


fetch('https:/techtat-api.web.app/candidates', {
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