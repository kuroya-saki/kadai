//3秒待った後にHELLO！と表示、2秒待ってBYE!
setTimeout (() => {
     console.log('HELLO!')
     setTimeout(() => {
         console.log('BYE!')
     }, 2000) 
 }, 3000)



