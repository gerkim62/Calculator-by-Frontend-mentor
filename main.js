const theme__inputs = document.querySelectorAll('.theme input')
console.log(theme__inputs)

retrieveTheme()


function storeTheme(theme){
  localStorage.setItem('theme', theme)
}

function retrieveTheme() {
  const theme = localStorage.getItem('theme')
  
  theme__inputs.forEach(theme__input => {
    if(theme__input.id === theme)theme__input.checked = true
  })
}

theme__inputs.forEach(input=>{
  input.addEventListener('change', ()=>{
    const theme = input.id
    storeTheme(theme)
  })
})



const display_input = document.getElementById('display')
const buttons_div = document.getElementById('buttons')

let displayValues = []
let expressionValues = []

buttons_div.addEventListener('click', e => {
  const clicked = e.target.innerHTML.trim()
  
  if (clicked.length > 5) return
  
  display_input.style.borderRight = '0px solid'

  if (clicked === '×') {
    displayValues.push(clicked)
    expressionValues.push('*')
  }

  if (clicked === '÷') {
    displayValues.push(clicked)
    expressionValues.push('/')
  }

  if (clicked === 'Del') {
    displayValues.pop()
    expressionValues.pop()
  }

  if (clicked === 'Reset') {
    displayValues = []
    expressionValues = []

    display_input.value = 0
    console.log(display_input.value)
    return
  }

  console.log(clicked)
  
  if(clicked === '=' && expressionValues.length === 0){
    if(display_input.value === 'Syntax Error!'){
          display_input.style.borderRight = '1px solid red'
    }
    if(display_input.value === 'Syntax Error!') return
    display_input.style.borderRight = '1px solid yellow'
  }

  if (clicked === '=' && expressionValues.length !== 0) {
    try {
      display_input.value = (eval(expressionValues.join('')).toFixed(10) * 1).toLocaleString()
          display_input.style.borderRight = '1px solid'
    }
    catch{
      display_input.style.borderRight = '1px solid red'
      display_input.value = 'Syntax Error!'
    }
    displayValues = []
    expressionValues = []
    

    
  }

  if (clicked === '-') {
    displayValues.push(clicked)
    expressionValues.push(clicked)
  }

  if (clicked === '+') {
    displayValues.push(clicked)
    expressionValues.push(clicked)
  }

  if (clicked === '.') {
    displayValues.push(clicked)
    expressionValues.push(clicked)
  }

  if (!isNaN(+clicked)) {
    displayValues.push(clicked)
    expressionValues.push(clicked)
  }


  if (clicked !== '=') display_input.value = displayValues.join('')

  if (!display_input.value) display_input.value = 0

  if(display_input.value === 'Infinity'){
    display_input.value = "I have no Idea!🥺"
    display_input.style.borderBottom = '0px solid gold'
  }

})
