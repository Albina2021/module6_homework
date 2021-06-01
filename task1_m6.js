//В прошлом модуле в разделе «Циклы» вы выполняли следующее задание: Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.  При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
let arr = [];
let oddCount = 0;
let evenCount = 0;
let zeroCount = 0;
function getOddEvenNum(){
for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number"){
        if(arr[i] === 0){
            zeroCount++;
        }
        else if(arr[i] % 2 == 0){
            evenCount++;
        }
        else {
            oddCount++;
        }
    }
}
console.log(`Count of odd: ${oddCount}`);
console.log(`Count of even: ${evenCount}`);
console.log(`Count of zero: ${zeroCount}`);
}
getOddEvenNum();
