const profile = {
    familyname: 'kuroya',
    age: 22,
    hobby: 'taking pictures',
    major: 'literature',
    gender: 'female',
    hometown:'aichi'
}
const keys = Object.keys(profile)
console.log(keys)

for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index]
    const value = profile[key]
    console.log('My ' + key + ' is ' + value + '.')
}
