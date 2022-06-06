 const name = prompt (  "как тебя зовут")
 console.log("hello" + name)

 const s1 = ["здесь текст",10,"доп элемент"]
 const s2 = ["здесь нету текста",10]

console.log(s1.length < s2.length)

let varr1 =['типо текст',6]
let varr2 = varr1
 console.log( varr2 === varr1)



 const svetofor = prompt(" выбери цвет (green,yellow,red)")
 switch (svetofor){
     case "green": alert("можно");
         break;
     case "yellow": alert("спорно");
         break;
     case "red": alert("нельзя!!!");
         break;
     default: alert("неправильно попытайся еще раз")
         break;
 }

    const arr2 = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]
    console.log(arr2[0.15])