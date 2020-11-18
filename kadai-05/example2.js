const person = {
    name:'kuroya', //文字列型
    age:22　　　　//数字型

}

console.log(person.age)
person.age = 23 //オブジェクトのプロパティに代入することができる(＝が代入)
console.log(person.age)
person['age'] = 24 //ブラケット記法でも大丈夫
console.log(person.age)

