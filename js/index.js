let $number = document.querySelectorAll('.number')
let $operators = document.querySelectorAll('.operators')
let $input = document.querySelector('.input')
let $output = document.querySelector('.output')


$number.forEach((element) => {
    element.addEventListener('click',() => {
        $output.innerText += element.textContent
        console.log('Funcionando!!')
    })
})

$operators.forEach((element) => {
    element.addEventListener('click',() => {
        $output.innerText += element.textContent
        console.log('Funcionando!!')
    })
})