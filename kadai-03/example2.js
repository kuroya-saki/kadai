//breakを使うとループの中断ができる
//今回は50でループを終えるやりかた
for (let n = 1; n < 101; n = n ++){
    if (n === 50){
        break
    } else {
        console.log(n)
    }
}