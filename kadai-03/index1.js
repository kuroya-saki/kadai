

// 生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 5 === 0) {
    console.log('あなたはマイペースな性格です')
} else if (day % 5 === 1) {
    console.log('あなたはせっかちな性格です')
} else if (day % 5 === 2 ){
    console.log('あなたはネガティブな性格です')
} else if (day % 5 === 3){
    console.log('あなたはアクティブな性格です')
}  else {
    console.log('あなたはポジティブな性格です')
}
