const animals = ['dog', 'cat', 'rabbit']

console.log(animals.length)　//上の要素の数を取得することができる
animals.push('pig')  //これ（push） で要素を追加することができる
console.log(animals)

const last = animals.pop()
console.log(last)
console.log(animals) //popで最後のものが飛び出して出てくるようになる

const removed = animals.splice(2,2, 'zeebra')
console.log(removed)
console.log(animals) //spliceで二番目の要素から二個取り出してそこにシマウマを入れることができる。



