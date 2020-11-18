const obj1 = {}
const obj2 = {
    a: 1,
    b: 'Hello!',
    'hello-world': 'aaaa'
}

console.log(obj2.a)
console.log(obj2['hello-world'])  
//↑オブジェクトの後ろにハイフンがあるときは、引き算と捉えられてしまう。[]で囲むとできるようになる！
