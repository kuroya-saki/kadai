//最⼤の数を⼊⼒する
const max=parseInt(process.argv[2])
for(let n=1;n < 101;n= n + 1){
if(n% 3===0){
console.log('3の倍数です')
}else{
console.log(n)
}
}