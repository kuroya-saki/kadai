 try {
    const str1 = "abc"  
    JSON.parse(str1)
 } catch (error) {
     //パースできない：正しいJSONでないため。
     //文字列だけのJSONは"で
     console.log(error)
 }

 try {
     const str2 = "'abc'"
     JSON.parse(str2)
 } catch (error){
     //JSONの文字列は"で囲む必要があるため
     console.log(error)
 }

 
     const str3 = '"abc"'
     JSON.parse(str3)
 

try{const str4 = '{"a": undefined}'
     JSON.parse(str4)
    }catch (error){
       console.log(error)
       //undefinedは値として使えないため。
 }

     const str5 = '{ "a": 123 }'
     JSON.parse(str5)

try {
     const str6 = '{ a: 123"}'
     JSON.parse(str6)
    } catch (error) {
       console.log(error)
        // JSONのキーはダブルクォーテーションで囲む必要があるため。
   }

try {
    const str7 ='{"func":() => console.log("HI!")}'
JSON.parse(str7)
} catch (error) {
    console.log(error)
    //ただしいJSONの文字列でないため。
}

