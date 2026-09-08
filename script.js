//basic math operators funcs:
function add(a,num){
adding = a + num 
    return adding;
}
function subtract(a, num) {
subtracting = a - num
    return subtracting
}
function multiply(a, num){
multiplying = a * num
    return multiplying
}
function divide(a, num){
dividing = a / num
    return dividing
}
// operation func:
function operate(askFor_a, askFor_op, askFor_num) {
    if (askFor_op === '+') {
        return add(askFor_a, askFor_num)
    }
    else if (askFor_op === '-') {
        return subtract(askFor_a, askFor_num)
    }
    else if (askFor_op === '*') {
        return multiply(askFor_a, askFor_num)
    }
    else if (askFor_op === '/') {
        return divide(askFor_a, askFor_num)
    }
}
//clear button:
let clear = document.querySelector('.clear')
clear.addEventListener('click', e => {
    display.value = '0'
    if(display.value == 0) {
        document.documentElement.style.setProperty('--twenyfive-clr' ,'transparent' );  
    }
    
})
let display = document.querySelector('.display')

let buttons = document.querySelectorAll('.btn')
buttons.forEach((button) => {
    button.addEventListener('click', e => {
        /*
        alert(e.target.dataset.num)
        */
        
        if (e.target.dataset.num == "+" || e.target.dataset.num == "-" || e.target.dataset.num == "*" || e.target.dataset.num == "/"){
        let hup = e.target;
        hup.disabled = true;

        let operators = document.getElementById('op').target
        if (display.value.includes("+") /*|| display.value.includes("-")*/|| display.value.includes("*") || display.value.includes("/")) {
            operators.disabled = true
        }

        opeysLife = document.getElementById("equal")
        opeysLife.addEventListener('click', e => {
        hup.disabled = false;
        })
        }
        

        if (display.value == 0) {
           display.value = display.value.replace(/[0]/, "") 
        }
        let value =  e.target.dataset.num;
        let firstValue = display.value += value;
        if(display.value == 0) {
            document.documentElement.style.setProperty('--twenyfive-clr' ,'transparent' );
        }
        else{
                document.documentElement.style.setProperty('--twenyfive-clr' ,'#000' ); 
        }
        if(value === '=' ){
            display.value = ''
            let both = display.value = firstValue.replace(/[=]/g, "")
            if(both.includes('+')){
                let [firsty, lasty]= both.split('+')
                display.value = operate(parseFloat(firsty), '+' , parseFloat(lasty))  
            }
            else if (both.includes('-') && !both.includes('*') && !both.includes('/')){
                let [firsty, lasty]= both.split('-')
                display.value = operate(firsty, '-' , lasty)  
            }
            else if (both.includes('*')){
                let [firsty, lasty]= both.split('*')
                display.value = operate(parseFloat(firsty), '*' , parseFloat(lasty)) 
            }
            else if (both.includes('/')){
                let [firsty, lasty]= both.split('/')
                display.value = operate(firsty, '/' , lasty)  
            }
            
        }
        if (display.value.length === 15 ){
            display.value = "Too long! "
        }
    })
})
// keyboard mapping func
window.addEventListener('keydown', e => {
const touch = document.querySelector(`button[data-key="${e.keyCode}"]`)
const touchShow = document.querySelector(`.bts[data-key="${e.keyCode}"]`)

if(!touch) return; 
touch.currentTime = 3;
touch.click()

touchShow.classList.add('touchShow')
})

function removeTransition (e) {
if(e.propertyName !== 'transform' ) return;
this.classList.remove('touchShow')
};

const buttonShows = document.querySelectorAll('.bts');
buttonShows.forEach(buttonShow => buttonShow.addEventListener('transitionend', removeTransition));

