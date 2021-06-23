let $number = document.querySelectorAll('.number')
let $operators = document.querySelectorAll('.operators')
let $input = document.querySelector('.input')
let $output = document.querySelector('.output')
let $clear = document.querySelector('[data-js="clear"]')
let $clearAll = document.querySelector('[data-js="clearAll"]')

$clear.addEventListener('click', clear)
$clearAll.addEventListener('click', clearAll)


$operators.forEach((element) => {
    element.addEventListener('click', () => {
        $input.innerText += $output.textContent + element.textContent
        $output.innerText = ''
        console.log('Funcionando!!')
    })
})

$number.forEach((element) => {
    element.addEventListener('click', () => {
        $output.innerText += element.textContent
        console.log('Funcionando!!')
    })
})


function clear() {
    $output.innerText = ''
}

function clearAll() {
    $input.innerText = ''
    clear()
}