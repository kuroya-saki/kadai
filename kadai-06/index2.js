try {
   const str1 = "abc"  
   JSON.parse(str1)
} catch (error) {
    //パースできない：正しいJSONでないため。
    //文字列だけのJSONは"で
    console.log(error)
}

try{
    const str2 = "'abc'"
    JSON.paese(str2)
} catch (error){
    //JSONの文字列は"で囲む必要があるため
    console.log(error)
}

const str3 = '"abc"'
JSON.parse(str3)


try{
    const str5 = '{ "a": 123 }'
    JSON.parse(str5)
} catch (error) {
    console
}

