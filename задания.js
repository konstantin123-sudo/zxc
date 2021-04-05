//1
let transport = prompt('Выберите транспорт');
if (transport  == "а"){
    alert("210")
}
else if (transport == "в") {
    alert("60")
}
else if (transport == "м") {
    alert("325")
}
else if (transport == "с") {
    alert("1120")
}
else if (transport == "п") {
    alert("300")
}
//2
function number(x){
  
    let arr = [];
    for (let i = 0; i < x; i++){
    arr.push(+prompt("Введите число",""));
    }
    let min = Math.min(...arr);
    alert(min);
    
}
 
number(+prompt("Введите кол-во чисел", ""));