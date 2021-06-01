//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
function primeNum (num) {
    if (num > 1000){
    const  result = "Данные неверны"; 
      return result;
    }else if(num === 0 || num == 1 || num == 2){
      const result = "Число простое"
      return result;
    }else{
      for (let i = 2; i < num; i++){
        if (num % i === 0){
     const   result = "Число не простое";
          return result;
          break;
        }else {
          const   result = "Число простое"
          return result;
        }
      }
    }
  }

  let user_num = prompt("Введите число<1000:");
  let result = primeNum (user_num);
  alert(result);



