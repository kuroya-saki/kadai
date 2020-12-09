const cat = '{ "hello":"world"}'
const jsonobject = {"hello":"world"}
const object = {
    species:"cat",
    name:"tama"
}
const jsonstring = JSON.stringify(object)
console.log(jsonstring === '{"species":"cat","name":"tama"}')

const parsed_object = JSON.parse(jsonstring)
console.log(parsed_object)
console.log(parsed_object.name)