console.log('hello2');
fetch('https://api.npoint.io/74e502af367c773ad03a').then(t=>t.json()).then(console.log);
const button = document.createElement('button');
button.textContent = "Submit";
button.addEventListener('click',()=>{
  console.log('clk');
  fetch('https://api.npoint.io/74e502af367c773ad03a', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Alice',
      age: 30,
      active: true
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

});
