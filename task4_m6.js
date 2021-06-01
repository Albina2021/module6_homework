//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
function getNums(a, b) {
    const intervalId = setInterval(function (){
        console.log(a);
        if (a == b){
            clearInterval(intervalId);
        }
        a++;
    }, 1000);
}
getNums(3, 49);
