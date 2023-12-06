## Project 1
```const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener('click',function(e) {
    console.log(e)
    console.log(e.target)
    switch(e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
      
    }
  });
});
```
## Project 2
```
const form = document.querySelector('form')
form.addEventListener('submit',function(e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results')
  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`
  } else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`
    results.appendChild(document.createElement('br'))
    if(bmi < 18.6) {
      let bmi_range = document.createTextNode(`You are under weight`)
      results.appendChild(bmi_range)
    } else if(bmi < 24.9) {
      let bmi_range = document.createTextNode(`You are normal range`)
      results.appendChild(bmi_range)
    }
    else {
      let bmi_range = document.createTextNode(`You are overweight`)
      results.appendChild(bmi_range)
    }
  }
})

```