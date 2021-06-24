const $number = document.querySelectorAll('.number')
const $operators = document.querySelectorAll('.operators')
const $input = document.querySelector('.input')
const $output = document.querySelector('.output')
const $clear = document.querySelector('[data-js="clear"]')
const $clearAll = document.querySelector('[data-js="clearAll"]')
const $equal = document.querySelector('[data-js="equal"]')
let equation
let result = 0

$clear.addEventListener('click', clear)
$clearAll.addEventListener('click', clearAll)
$equal.addEventListener('click', calculate)

$number.forEach((element) => {
    element.addEventListener('click', () => {
        if ($output.innerText.length < 8) $output.innerText += element.textContent + ' '

    })
})

$operators.forEach((element) => {
    element.addEventListener('click', () => {
        if ($output.innerText != '') {
            $input.innerText += ' ' + $output.textContent + ' ' + element.textContent + ' '
            $output.innerText = ''
        }

    })
})


function calculate() {

    if ($input.innerText != '') {

        setTimeout(() => {
            equation = $input.innerText
            equation = equation.split(' ')

            for (let i = 0; i < equation.length; i++) {

                switch (equation[i]) {
                    case '+':
                        result += equation[i - 1] ? Number(equation[i - 1]) + Number(equation[i + 1]) : result += Number(equation[i + 1])
                        equation.shift()
                        equation.shift()
                        equation.shift()
                        equation.unshift()
                        i = 0
                        $output.innerText = result
                        break
                    case '×':
                        result += Number(equation[i - 1]) * Number(equation[i + 1])
                        $output.innerText = result
                        break
                    case '÷':
                        result += Number(equation[i - 1]) / Number(equation[i + 1])
                        $output.innerText = result
                        break
                    case '-':
                        result += Number(equation[i - 1]) - Number(equation[i + 1])
                        $output.innerText = result
                        break
                    case '%':
                        result += Number(equation[i - 1]) % Number(equation[i + 1])
                        $output.innerText = result
                        break
                }
            }
        }, 1)
    }
}

function clear() {
    $output.innerText = ''
}

function clearAll() {
    $input.innerText = ''
    equation = ''
    result = 0
    clear()
}