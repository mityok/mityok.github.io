console.log('hello3');
//fetch('https://api.npoint.io/74e502af367c773ad03a').then(t=>t.json()).then(console.log);
const button2 = document.createElement('button');
button2.textContent = "Full";
document.body.append(button2);
button2.addEventListener('click',()=>{
  console.log('clk2');
  document.body.requestFullscreen();
})
const button = document.createElement('button');
button.textContent = "Submit";
document.body.append(button);
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
